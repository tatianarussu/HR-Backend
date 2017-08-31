'use strict'
var Personal_InfoModel = require('./model');
var Sequelize = require('sequelize');
var Users= require('../users/model');


function getAllPersonal_Info() {
    return  Personal_InfoModel.findAll({
        include: [{
            model: Users
        }]
    })
}
function getPersonal_InfoByID(id) {
    return Personal_InfoModel.findById(id);
}
function createPersonal_Info(object) {
    return Personal_InfoModel.create(object);
}
function findPersonInfoByUserId (userId){
    return Personal_InfoModel.findOne({
        where :{
            users_id:userId,
        }
    })
}
function updatePersonalInfo(body,idPersonalInfo) {
    return Personal_InfoModel.update(body,{
        where: {id: idPersonalInfo}
    });
}

module.exports.getAllPersonal_Info = getAllPersonal_Info;
module.exports.getPersonal_InfoByID = getPersonal_InfoByID;
module.exports.createPersonal_Info = createPersonal_Info;
module.exports.findPersonInfoByUserId = findPersonInfoByUserId;
module.exports.updatePersonalInfo = updatePersonalInfo;