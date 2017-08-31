var express = require('express');
var router = express.Router();
var User_RolesController = require('./controller');

router.get('/', function (req, res, next) {
    User_RolesController.getAllUser_Roles()
        .then((data) => {
            succes: true,
                res.json(data);
        })
        .catch((error) => {
            res.status(404);
            res.json({
                succes : false,
                data : error
            })
        });

});
module.exports = router;