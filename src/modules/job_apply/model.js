"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Users = require('../users/model');

var Job_Apply= sequelize.define("job_apply", {

    jobs_id: {
        field: "user_id",
        type: Sequelize.INTEGER,
        foreignKey: true
    },

    users_id: {
        field: "user_id",
        type: Sequelize.INTEGER,
        foreignKey: true
    },
});

Job_Apply.belongsTo(Users, {foreignKey: 'users_id'});
Users.hasMany(Job_Apply, {foreignKey: 'users_id'});

module.exports = Job_Apply;