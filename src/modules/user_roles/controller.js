'use strict'
var User_RolesModel = require('./model');
var Sequelize = require('sequelize');
var Users = require('../Users/model');


function getAllUser_Roles() {
    return User_RolesModel.findAll({

    })
}
module.exports.getAllUser_Roles = getAllUser_Roles;
