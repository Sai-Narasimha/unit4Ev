const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.qllwz.mongodb.net/evc4?retryWrites=true&w=majority")
}

module.exports = connect;