const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName : {type: 'string', required: true},
    lastName : {type: 'string', required: true},
    age : {type: 'number', required: true},
    email : {type: 'string', required: true},
    profileImages : {type: 'string', required: false},

},{
    versionKey : false,
    timestamp : true
});

const User = mongoose.model('user',userSchema);

module.exports = User