'use strict'
var UserEducationModel = require('./model');
var Sequelize = require('sequelize');
var Personal_Info = require('../personal_info/model');

function getAllUserEducation() {
    return  UserEducationModel.findAll({
        attributes: {
            exclude: ['person_id']
        },
        include: [{
            model: Personal_Info
        }]
    })
}
// function getUserEducationByID(id) {
//     return UserEducationModel.findById(id);
//
// }

// function createUserEducation(object) {
//     return UserEducationModel.create(object);
// }
//
// function deleteUserEducation(workid) {
//     return UserEducationModel.destroy({
//         where: {id: workid}
//     });
// }
function findUserEducationByPersonalInfoID (personalInfoId){
    return UserEducationModel.findOne({
        where :{
            person_id:personalInfoId,
        }
    })
}

function createEducationInfo(object) {
    return UserEducationModel.create(object);
}

function updateEducationInfo(body,personalInfoId) {
    return UserEducationModel.update(body,{
        where: {person_id: personalInfoId}
    });
}
// function updateUserEducation(body,idwork) {
//     return UserEducationModel.update(body,{
//         where: {id: idwork}
//     });
// }

module.exports.getAllUserEducation= getAllUserEducation;
// module.exports.getUserEducationByID = getUserEducationByID;
// module.exports.createUserEducation = createUserEducation;
// module.exports.deleteUserEducation = deleteUserEducation;
// module.exports.updateUserEducation = updateUserEducation;
module.exports.findUserEducationByPersonalInfoID = findUserEducationByPersonalInfoID;
module.exports.createEducationInfo = createEducationInfo;
module.exports.updateEducationInfo = updateEducationInfo;