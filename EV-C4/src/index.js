const express = require('express');
const todoController = require('./controllers/todos.controller');
const userController = require('./controllers/user.controller');
const app = express();

app.use(express.json())
app.use("/users",userController);
app.use("/todos", todoController);
module.exports = app