const mongoose = require('mongoose');

const connect = ()=>{
    return mongoose.connect("mongodb+srv://sainarasimha:sai123@cluster0.mjd2n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

module.export = connect;