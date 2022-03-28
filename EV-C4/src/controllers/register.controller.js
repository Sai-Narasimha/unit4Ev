const express = require('express');
const Register = require('../models/register.model')
const router = express.Router();

router.post("",async(req,res)=>{
    try {
        const register = await Register.create(req.body)
        res.status(200).send(register)
    } catch (error) {
        res.status(401).send(error.message);
        console.log(error);
    }
})