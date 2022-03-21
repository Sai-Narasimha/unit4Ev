const express = require('express');
const router =  express.Router();
// const app = express()
// const masterAccountController = require("../MODELS/masterAccount.model");

router.get("/:id",async (req,res)=>{
    try{
        const masterAccount = await MasterAccount.findById(req.params.id).populate({path:"masterAccount"}).lean().exec();
        return res.status(200).send(masterAccount);

    }catch(error){
        console.log('error: ', error);

    }
});
module.exports = router;