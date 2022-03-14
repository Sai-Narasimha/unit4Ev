const express = require('express');
const User = require('../MODELS/user.model');

const router = express.router();

router.get('/', (req, res) => {
    const user = await User.find().lean().exec();
})