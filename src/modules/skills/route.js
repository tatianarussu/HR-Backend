var express = require('express');
var router = express.Router();
var SkillsController = require('./controller');

router.get('/', function (req, res, next) {
    SkillsController.getAllSkills()
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
    SkillsController.createSkills(req.body)
        .then((data) => {
            res.json({succes: true, data: data});
        })
        .catch((error) => {
            res.status(404);
            res.json({
                succes : false,
                data : error
            })
        });

});

router.get('/:id',function (req, res, next) {
    SkillsController.getSkillByID(req.params.id).then((data) => {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    SkillsController.deleteSkills(req.params.id)
        .then((data) => {
            res.json({succes: true, data: data});
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