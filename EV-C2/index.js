const express = require('express');
const mongoose = require('mongoose');
const connect = require('./SRC/CONFIGS/db');
const masterAccountController = require('./SRC/CONTROLLERS/masterAccount.controller')
const fixedAccountController = require('./SRC/CONTROLLERS/fixedAccount.controller')
const savingAccountController = require('./SRC/CONTROLLERS/savingsAccount.controller')
const app = express();

app.use(express.json())
app.use("/masterAccount",masterAccountController);
app.use("/fixedAccount",fixedAccountController)
app.use("/savingsAccount",savingAccountController);

app.listen(1600,(req, res) => {
    console.log("listening port 1600")
})