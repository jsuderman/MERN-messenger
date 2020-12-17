//dependencies
const express = require("express");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const cors = require("cors");
const mongoMessage = require("./messageModel");

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1124553",
    key: "57cd75778200c86ff161",
    secret: "8fab55668685fe74d7c0",
    cluster: "us3",
    useTLS: true
});


//middleware
app.use(express.json());
app.use(cors());


//db config
const mongoURI = 'mongodb+srv://admin:nkMA7Tv1uQDjdmEv@cluster0.sr3f2.mongodb.net/messengerDB?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log("DB is Connected")

    const changeStream = mongoose.connection.collection('messages').watch();
    changeStream.on('change', (change) => {
        pusher.trigger('messages', 'newMessage', {
            'change': change
        });
    });
});



//api routes
app.get('/', (req,res) => res.status(200).send('GET request processed'));

app.post('/save/messages', (req,res) => {
    const dbMessage = req.body;
    console.log(dbMessage)

    mongoMessage.create(dbMessage, (err,data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        };
    });
})

app.get('/retrieve/conversation', (req,res) => {
    mongoMessage.find((err,data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            data.sort((b,a) => {
                return a.timestamp - b.timestamp;
            });
            
            res.status(200).send(data);
        };
    })
})



//listener
app.listen(port, () => console.log(`listening on port:${port}`))