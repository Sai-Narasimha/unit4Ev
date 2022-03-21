const express = require('express');
const userController = require('./controllers/user.controller');
const bookController = require('./controllers/book.controller')
const app = express();

app.use("/user", userController)
app.use("/book", bookController)
module.exports = app