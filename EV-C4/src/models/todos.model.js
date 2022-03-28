const mongoose = require('mongoose');
const User = require('./user.model')
const todoSchema = mongoose.Schema({
    title : {type: String, required: true},
    user : {type : mongoose.Schema.Types.ObjectId,ref:"User", required: false}
},{
    versionKey : false,
    timestamps : true
})

const Todos = mongoose.model("todos",todoSchema);

module.exports = Todos