const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/user.models');
const router = express.Router();

router.post("/",
body("firstName")
.isEmpty()
.withMessage("first name is require")
.isLength({min : 3},{max : 30})
.withMessage("length should be between 3 and 30"),
body("lastName")
.isEmpty()
.withMessage("last name is require")
.isLength({min :3},{max : 30})
.withMessage("length should be between 3 and 30"),
body("age")
.isEmpty()
.custom((val) =>{
    if(val < 1 || val > 150){
        throw new Error("Age is out of range")
    }
    else return true;
}),
body("email")
.isEmail()
.withMessage("please enter valid mail") 
,async (req,res)=>{
    try {
        // console.log(body())
        const user = await User.find().lean().exec();
        
    } catch (error) {
        return res.status(500).send("user")
        
    }
})

module.exports = router;