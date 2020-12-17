const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    username: String,
    message: String,
    timestamp: String
})

const Message = mongoose.model('messages', messageSchema);

module.exports = Message