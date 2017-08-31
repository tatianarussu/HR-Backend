"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var UserRoles = require('../user_roles/model');

var Users = sequelize.define("users", {

            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },

});

Users.belongsTo(UserRoles, {foreignKey: 'user_role_id', onDelete: 'cascade'});
UserRoles.hasMany(Users, {foreignKey: 'user_role_id', onDelete: 'cascade'});

module.exports = Users;
