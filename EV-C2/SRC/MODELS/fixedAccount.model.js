const mongoose = require('mongoose')
const user = require('./user.model')
const masterAccount = require('./masterAccount.model')
const fixedAccountSchema = mongoose.Schema({
    masterAccount : {type : mongoose.Schema.Types.ObjectId,ref:"masterAccount",required: true},
    accountNumber: {type: 'string', required: true,unique: true},
    balance : {type: 'number', required: true},
    interstRate : {type: 'number', required: true},
    startDate : {type: 'date', required: true}
});

const FixedAccount = mongoose.model("fixedAccount",fixedAccountSchema);
module.exports = FixedAccount;