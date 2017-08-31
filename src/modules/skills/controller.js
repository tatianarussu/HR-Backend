'use strict'
var SkillsModel = require('./model');
var Sequelize = require('sequelize');



function getAllSkills() {
    return SkillsModel.findAll({
    })
}
function getSkillByID(id) {
    return SkillsModel.findById(id);
}
function createSkills(object) {
    return SkillsModel.create(object);
}

function deleteSkills(id) {
    return SkillsModel.destroy({
        where: {id: id}
    });
}

module.exports.getAllSkills = getAllSkills;
module.exports.getSkillByID = getSkillByID;
module.exports.createSkills = createSkills;
module.exports.deleteSkills = deleteSkills;
