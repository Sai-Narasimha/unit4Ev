const mongoose = require('mongoose')
const user = require('./user.model')
const branchDetails = require('./branchDetails.model');
const savingAccountSchema = mongoose.Schema({
    user : {typs :mongoose.Schema.Types.ObjectId,ref :"user",required:true},
    branchDetails : {typs :mongoose.Schema.Types.ObjectId,ref :"branchDetails",required:true},
    accountNumber : {type: 'string', required: true, unique: true},
    balance : {type: 'number', required: true},
    interestRate : {type: 'number', required: true},

},{
    timestamps : true, 
    versionKey : false
})

const SavingAccount = mongoose.model("savingAccount",savingAccountSchema);
module.exports = SavingAccount;