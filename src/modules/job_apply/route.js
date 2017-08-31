var express = require('express');
var router = express.Router();
var Job_ApplyController = require('./jobApplyController');


router.get('/', function (req, res, next) {
    Job_ApplyController.getAllJob_Apply()
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
router.post('/', function (req, res, next) {
    console.log('reqqqqq', req.body);
    Job_ApplyController.createJob_Apply(req.body)
        .then((data) => {
            res.json({succes: true, data: data});

        })
        .catch((error) => {
            res.status(404);
            res.json({
                succes: false,
                data: error.toString()
            })
        });

});

module.exports = router;