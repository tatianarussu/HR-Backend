"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Personal_Info = require('../personal_info/model');

var UserEduction = sequelize.define("user_educations",{

    school_name: {
        type: Sequelize.STRING,
    },
    graduated_year: {
        type: Sequelize.DATE
    },
    description: {
        type: Sequelize.STRING,
    }
});
UserEduction.belongsTo(Personal_Info, {foreignKey: 'person_id'});
Personal_Info.hasMany(UserEduction, {foreignKey: 'person_id'});

module.exports = UserEduction;



