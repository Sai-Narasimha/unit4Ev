const express = require('express');
const router = express.Router();


router.post("/", async (req, res) => {
    const savingAccount = await SavingAccount.create(req.body);
    return res.status(200).send(savingAccount);
})

module.exports = router;