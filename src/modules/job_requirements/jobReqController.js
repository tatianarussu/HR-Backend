'use strict'
var Job_RequirementsModel = require('./model');
var Jobs = require('../Jobs/model');
var Skills = require('../Skills/model');

function getAllJob_Requirements() {
    return  Job_RequirementsModel.findAll({
        attributes: {
            exclude: ['jobs_id','skills_id']
        },
        include: [{
            model: Jobs
        }, {
            model: Skills
        }]

    })
}
function ConstructJobRequirement(jobId, skillId) {
    this.skill_id = skillId;
    this.job_id = jobId;
}

function createJobRequirements(jobId, skillIdList) {
    console.log("received job Id in createJobRequirements method: ", jobId);
    console.log("received skillIdList in createJobRequirements method: ", skillIdList);

    skillIdList.forEach(skillId => {
        let newJobRequirements = new ConstructJobRequirement(jobId, skillId);
        Job_RequirementsModel.create(newJobRequirements);
    });
}

module.exports.createJobRequirements = createJobRequirements;
module.exports.getAllJob_Requirements = getAllJob_Requirements;