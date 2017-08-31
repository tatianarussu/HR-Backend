"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Jobs = require('../Jobs/model');
var Skills = require('../Skills/model');

var Job_Requirements = sequelize.define("Job_Requirements", {

    job_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },

    skill_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
});


Job_Requirements.belongsTo(Jobs, {foreignKey: 'job_id'});
Job_Requirements.belongsTo(Skills, {foreignKey: 'skill_id'});

module.exports = Job_Requirements;