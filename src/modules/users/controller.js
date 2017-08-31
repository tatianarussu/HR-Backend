'use strict'
var UsersModel = require('./model');
var Sequelize = require('sequelize');
var UserRoles = require('../user_roles/model');

function getAllUsers() {
    return  UsersModel.findAll({
        include: [{
            model: UserRoles
        }]
    })
}
function getUserByID(id) {
    return UsersModel.findById(id, {
        include: [{
            model: UserRoles
        }]
    });
}
function login (username,password){
    return UsersModel.findOne({
        where :{
            username:username,
            password:password,
        }
    })
}
function createUser(object) {
    return UsersModel.create(object);
}
function deleteUser(jobid) {
    return UsersModel.destroy({
        where: {id: jobid}
    });
}
function updateUser(body,idjob) {
    return UsersModel.update(body,{
        where: {id: idjob}
    });
}

module.exports.login=login;
module.exports.getAllUsers = getAllUsers;
module.exports.getUserByID = getUserByID;
module.exports.createUser = createUser;
module.exports.deleteUser = deleteUser;
module.exports.updateUser = updateUser;