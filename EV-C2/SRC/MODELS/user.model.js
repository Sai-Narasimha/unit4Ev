const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    firstName : {type: 'string', required: true},
    lastName : {type: 'string', required: true},
    age : {type: 'number', required: true},
    email : {type: 'string', required: true},
    address : {type: 'string', required:true},
    gender : {type: 'string', required: true} || "Female",
    type : {type: 'string', required: true} || "customer"

})

const User = mongoose.model('user',userSchema);

module.exports = User;