const express = require('express');
const router = express.Router();


router.post("/", async (req, res) => {
    const fixedAccount = await FixedAccount.create(req.body);
    return res.status(200).send(fixedAccount);
})

module.exports = router;