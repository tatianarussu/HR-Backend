'use strict'
var User_SkillsModel = require('./model');
var Jobs = require('../Jobs/model');
var Skills = require('../Skills/model');
var  Personal_Info = require('../Personal_Info/model');

function getAllUser_Skills() {
    return  User_SkillsModel.findAll({
        attributes: {
            exclude: ['person_id','skills_id']
        },
        include: [{
            model: Personal_Info
        }, {
            model: Skills
        }]

    })
}
function ConstructUser_Skills(personalInfoId, skillId) {
    this.skill_id = skillId;
    this.person_id = personalInfoId;
}

function createUser_Skills(personalInfoId, skillIdList) {
    console.log("received  personalInfoId in createUser_Skills method: ", personalInfoId);
    console.log("received skillIdList in createUser_Skills method: ", skillIdList);

    skillIdList.forEach(skillId => {
        let newUser_Skills = new ConstructUser_Skills(personalInfoId, skillId);
        User_SkillsModel.create(newUser_Skills);
    });
}

module.exports.createUser_Skills = createUser_Skills;
module.exports.getAllUser_Skills = getAllUser_Skills;