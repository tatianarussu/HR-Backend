'use strict'
var User_Work_ExperienceModel = require('./model');
var Sequelize = require('sequelize');
var Personal_Info = require('../personal_info/model');

function getAllUser_Work_Experience() {
    return  User_Work_ExperienceModel.findAll({
        attributes: {
            exclude: ['person_id']
        },
        include: [{
            model: Personal_Info
        }]
    })
}
function getUser_Work_ExperienceByID(id) {
    return User_Work_ExperienceModel.findById(id);

}

function createUser_Work_Experience(object) {
    return User_Work_ExperienceModel.create(object);
}

function deleteUser_Work_Experience(workid) {
    return User_Work_ExperienceModel.destroy({
        where: {id: workid}
    });
}
function updateUser_Work_Experience(body,idwork) {
    return User_Work_ExperienceModel.update(body,{
        where: {id: idwork}
    });
}

module.exports.getAllUser_Work_Experience = getAllUser_Work_Experience;
module.exports.getUser_Work_ExperienceByID = getUser_Work_ExperienceByID;
module.exports.createUser_Work_Experience = createUser_Work_Experience;
module.exports.deleteUser_Work_Experience = deleteUser_Work_Experience;
module.exports.updateUser_Work_Experience = updateUser_Work_Experience;