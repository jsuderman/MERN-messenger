//dependencies
const express = require("express");
const mongoose = require("mongoose");
const Pusher = require("pusher");
const cors = require("cors");

//app config
const app = express();
const port = process.env.PORT || 9000;


//middleware



//db config



//api routes
app.get('/', (req,res) => res.status(200).send('GET request processed'))



//listener
app.listen(port, () => console.log(`listening on port:${port}`))