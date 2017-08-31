"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Personal_Info = require('../personal_info/model');

var User_Work_Experience = sequelize.define("user_work_experiences",{

    company_name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    position: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    start_data: {
        type: Sequelize.DATE
    },

    end_data: {
        type: Sequelize.DATE
    },

});
User_Work_Experience.belongsTo(Personal_Info, {foreignKey: 'person_id'});
Personal_Info.hasMany(User_Work_Experience, {foreignKey: 'person_id'});

module.exports = User_Work_Experience;