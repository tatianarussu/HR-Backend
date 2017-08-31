"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var Users = require('../users/model');


var Personal_Info = sequelize.define("personal_info", {
    first_name: {
        type: Sequelize.STRING,

    },
    last_name: {
        type: Sequelize.STRING,

    },
    description: {
        type: Sequelize.STRING,

    },

} );
Personal_Info.belongsTo(Users, {foreignKey: 'users_id'});
Users.hasMany(Personal_Info, {foreignKey: 'users_id'});


module.exports = Personal_Info;
