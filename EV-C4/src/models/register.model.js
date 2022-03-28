const mongoose = require('mongoose');
const user = require('./user.model')
const registerSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId,ref : "user",required: true}
});

const Register = mongoose.model("register",registerSchema);

module.exports = Register;