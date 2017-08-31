"use strict";

var Sequelize = require('sequelize');
var sequelize = require('../../config/sequelize').init(null);


    var UserRoles = sequelize.define("user_roles",
        {
            code: {
                type: Sequelize.STRING,
            },

            description: {
                type: Sequelize.STRING,
            }
        });


module.exports = UserRoles;
