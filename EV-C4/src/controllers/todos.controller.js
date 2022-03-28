const express = require('express');

const Todos = require('../models/todos.model');
const user = require('../models/user.model')
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const todos = await Todos.find().pretty().populate({path:"user"}).lean().exec();
        res.status(200).send(todos)
    } catch (error) {
        res.status(401).send({message: error.message});
        console.log(error);
    }
})
router.get("/:id", async(req,res)=>{
    try {
        const todo = await Todos.findById(req.params.id).pretty().populate({path:"user"}).lean().exec();
        res.status(200).send(todo)
    } catch (error) {
        res.status(401).send({message: error.message});
        console.log(error);
    }
})
router.post("", async(req,res)=>{
    try {
        const todo = await Todos.create(req.body);
        res.status(200).send({todo});
    } catch (error) {
        res.status(401).send({message: error.message});
        console.log(error)
    }
});
router.patch("/:id", async(req,res)=>{
    try {
        const todo = await Todos.findByIdAndUpdate(req.params.id).pretty().populate({path:"user"}).lean().exec();
        res.status(200).send(todo)
    } catch (error) {
        res.status(401).send({message: error.message});
        console.log(error);
    }
})
router.delete("", async(req,res)=>{
    try {
        const todo = await Todos.findByIdAndDelete(req.params.id);
        res.status(200).send({todo});
    } catch (error) {
        res.status(401).send({message: error.message});
        console.log(error)
    }
});


module.exports = router;