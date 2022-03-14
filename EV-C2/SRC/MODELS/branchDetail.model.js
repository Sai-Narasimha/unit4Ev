const mongoose = require('mongoose')

const branchDetailSchema = mongoose.Schema({
    name : {type: 'string', required: true},
    addresses: {type: 'string', required: true},
    IFSC : {type: 'string', required: true},
    MICRO : {type: 'number', required: true}

},{
    versionKey : false,
    timestamps : true
});

const BranchDetail = mongoose.model("branchDetail",branchDetailSchema)

module.exports = BranchDetail