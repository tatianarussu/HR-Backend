var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);
var Personal_Info = require('../personal_info/model');
var Skills = require('../skills/model');

var User_Skills = sequelize.define("user_skills",{

    personal_info_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },

    skills_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
});


User_Skills.belongsTo(Personal_Info, {foreignKey: 'person_id'});
User_Skills.belongsTo(Skills, {foreignKey: 'skills_id'});

module.exports = User_Skills;