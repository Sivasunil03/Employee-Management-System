const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ids: {
        type: String,
        required: true,
        unique: true, 
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }

});

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
