'use strict'
var Job_ApplyModel = require('./model');
var Users = require('../users/model');


function getAllJob_Apply() {
    return  Job_ApplyModel.findAll({
        include: [{
            model: Users
        }]

    })
}
function createJob_Apply(object) {
    console.log('obj', object);
    return Job_ApplyModel.create(object);
}

module.exports.getAllJob_Apply = getAllJob_Apply;
module.exports.createJob_Apply = createJob_Apply;