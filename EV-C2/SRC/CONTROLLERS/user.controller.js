const express = require('express');
const User = require('../MODELS/user.model');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const user = await User.find().lean().exec()
        return res.status(200).send(user);
    } catch (error) {
        console.log('error: ', error);
        
    }
    const user = await User.find().lean().exec();
})
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).send(user);
    } catch (error) {
        console.log('error: ', error);
        
    }
    const user = await User.find().lean().exec();
})
module.exports = router;