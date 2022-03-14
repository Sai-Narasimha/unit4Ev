const mongoose = require('mongoose')
const user = require('./user.model')
const branchDetails = require('./branchDetails.model');
const masterAccountSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId,ref: "user",required: true},
    branchName :{type : mongoose.Schema.Types.ObjectId,ref: "branchDetails",required: true},
    balance : {type: 'number', required: true}

},{
    versionKey : false,
    timestamp : true
});

const MasterAccount = mongoose.model('masterAccount', masterAccountSchema);

module.exports = MasterAccount;