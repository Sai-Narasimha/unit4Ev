const express = require('express');
const Book = require('../models/book.model')
const router = express.Router();

router.post("/",async(req,res) =>{
    try {
        const book = await Book.create()
        return res.status(200).send(book)
    } catch (error) {
        return res.status(500).send(error.message)
    }
});

module.exports = router