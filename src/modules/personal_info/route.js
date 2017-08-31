var express = require('express');
var router = express.Router();
var Personal_InfoController = require('./controller');

router.get('/', function (req, res, next) {
    Personal_InfoController.getAllPersonal_Info()
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

router.get('/:id',function (req, res, next) {
    Personal_InfoController.getPersonal_InfoByID(req.params.id).then((data) => {
        res.json(data);
    });
});

router.get('/userPersonInfo/:userId', function (req, res, next) {
    Personal_InfoController.findPersonInfoByUserId(req.params.userId)
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
router.post('/', function (req, res, next) {
    Personal_InfoController.createPersonal_Info(req.body)
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
router.put('/:id', function (req, res, next) {
    Personal_InfoController.updatePersonalInfo(req.body,req.params.id)
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