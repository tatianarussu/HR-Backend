var express = require('express');
var router = express.Router();
var Job_RequirementsController = require('./jobReqController');



router.get('/', function (req, res, next) {
    Job_RequirementsController.getAllJob_Requirements()
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