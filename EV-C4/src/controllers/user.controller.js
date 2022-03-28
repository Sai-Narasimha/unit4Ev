const express = require('express');

const User = require('../models/user.model');

const router = express.Router();

router.get('', async(req,res)=>{
    try {
        const user = await User.find().lean().exec();
        res.status(200).send(user)
        
    } catch (error) {
        res.status(401).send({message: error.message})
        console.log(error)
    }
})

router.post("",async(req,res)=>{
    try {
        const user = await User.create(req.body);
        res.status(200).send(user);
    } catch (error) {
        res.send(401).send({message: error.message})
        console.log(error)
    }
});

module.exports = router;