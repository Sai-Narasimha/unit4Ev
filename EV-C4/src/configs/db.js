const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.mjd2n.mongodb.net/evc4?retryWrites=true&w=majority")
}

module.exports = connect;