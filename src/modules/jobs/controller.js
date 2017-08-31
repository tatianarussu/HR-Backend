'use strict'
var JobsModel = require('./model');
var Sequelize = require('sequelize');
var Skills = require('../skills/model');
var sequelize = require('../../config/sequelize').init(null);
var Jobs =require('../jobs/model');
var Users =require('../users/model');



function getAllJobs() {
    return JobsModel.findAll({
        include: {
            model: Skills
        }
    })
}

function getJobByID(id) {
    return JobsModel.findById(id, {
        include: [{
            model: Skills
        },{
            model: Users
        }]
    });
}
function createJob(job) {
    return Jobs.create(job);
}

function deleteJob(jobid) {
    return JobsModel.destroy({
        where: {id: jobid}
    });
}

function updateJob(body, idjob) {
    return JobsModel.update(body, {
        where: {id: idjob}
    });
}


module.exports.getAllJobs = getAllJobs;
module.exports.getJobByID = getJobByID;
module.exports.createJob = createJob;
module.exports.deleteJob = deleteJob;
module.exports.updateJob = updateJob;
