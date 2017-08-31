var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);

var Skills = sequelize.define("Skills", {

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },

});

module.exports = Skills;