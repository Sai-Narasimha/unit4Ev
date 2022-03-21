const express = require('express');
const mongoose = require('mongoose');
const connect = require('./SRC/CONFIGS/db');
const userController = require("./SRC/CONTROLLERS/user.controller")
const masterAccountController = require('./SRC/CONTROLLERS/masterAccount.controller')
const fixedAccountController = require('./SRC/CONTROLLERS/fixedAccount.controller')
const savingAccountController = require('./SRC/CONTROLLERS/savingsAccount.controller')
const app = express();

app.use(express.json())
app.use("/user",userController)
app.use("/masterAccount",masterAccountController);
app.use("/fixedAccount",fixedAccountController)
app.use("/savingsAccount",savingAccountController);

app.listen(1600,async (req, res) => {
    try{
        await connect();
    }catch(error){
        console.log('error: ', error);
        
    }
    console.log("listening port 1600")
})