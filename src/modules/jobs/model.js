"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Skills = require('../skills/model');
var Users = require('../users/model');

var Jobs = sequelize.define("Jobs", {

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },

    benefits: {
        type: Sequelize.TEXT
    },

});
Jobs.belongsToMany(Skills,{
    through:'job_requirements',
    foreignKey:'job_id',
    onDelete: 'cascade'
});

Skills.belongsToMany(Jobs,{
    through:'job_requirements',
    foreignKey:'skill_id',
    onDelete: 'cascade'
});

Jobs.belongsToMany(Users,{
    through:'job_apply',
    foreignKey:'job_id',
    onDelete: 'cascade'
});

Users.belongsToMany(Jobs,{
    through:'job_apply',
    foreignKey:'user_id',
    onDelete: 'cascade'
});

module.exports = Jobs;