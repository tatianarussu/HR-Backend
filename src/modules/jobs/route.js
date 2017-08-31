var express = require('express');
var router = express.Router();
var JobsController = require('./controller');
var JobReqController = require('../job_requirements/jobReqController');

router.get('/', function (req, res, next) {
    JobsController.getAllJobs({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            res.status(404);
            res.json({
                success: false,
                data: error.toString()
            })
        });

});

router.post('/', function (req, res, next) {

    JobsController.createJob(req.body)
        .then((data) => {
            let job_id = data.dataValues.id;
            let skill_list = req.body.requirements;

            JobReqController.createJobRequirements(job_id, skill_list);
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

router.get('/:id', function (req, res, next) {
    JobsController.getJobByID(req.params.id).then((data) => {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    JobsController.deleteJob(req.params.id)
        .then((data) => {
            res.json({succes: true, data: data});
        })
        .catch((error) => {
            res.status(404);
            res.json({
                succes: false,
                data: error
            })
        });
});

router.put('/:id', function (req, res, next) {
    JobsController.updateJob(req.body, req.params.id)
        .then((data) => {
            res.json({succes: true, data: data});
        })
        .catch((error) => {
            res.status(404);
            res.json({
                succes: false,
                data: error
            })
        });
});

module.exports = router;
