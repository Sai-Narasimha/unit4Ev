const mongoose = require("mongoose");
const User = require("./user.models")
const bookSchema = mongoose.Schema({
    username:{type: mongoose.Schema.Types.ObjectId,ref : "User", required:true},
    likes :{type: 'number', required: true},
    coverImage :{type: 'string', required: true},
    content :{type : 'string', required:true},

},{
    timestamp : true,
    versionKey : false
});

const Book = mongoose.model("book",bookSchema);

module.exports = Book;