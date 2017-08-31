var express = require('express');
var router = express.Router();
var User_Work_ExperienceController = require('./controller');

router.get('/', function (req, res, next) {
    User_Work_ExperienceController.getAllUser_Work_Experience()
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
    User_Work_ExperienceController.createUser_Work_Experience(req.body)
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
    User_Work_ExperienceController.getUser_Work_ExperienceByID(req.params.id).then((data) => {
        res.json(data);
    });
});

router.delete('/:id', function (req, res, next) {
    User_Work_ExperienceController.deleteUser_Work_Experience(req.params.id)
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
router.put('/:id', function (req, res, next) {
    User_Work_ExperienceController.updateUser_Work_Experience(req.body,req.params.id)
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
