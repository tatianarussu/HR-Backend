var express = require('express');
var router = express.Router();
var UserEducationController = require('./controller');

router.get('/', function (req, res, next) {
    UserEducationController.getAllUserEducation()
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

// router.post('/', function (req, res, next) {
//     UserEducationController.createUserEducation(req.body)
//         .then((data) => {
//             res.json({succes: true, data: data});
//         })
//         .catch((error) => {
//             res.status(404);
//             res.json({
//                 succes : false,
//                 data : error
//             })
//         });
//
// });

router.get('/userEducationInfo/:personalInfoId', function (req, res, next) {
    console.log("Am ajuns in get de userEducationInfo");
    UserEducationController.findUserEducationByPersonalInfoID(req.params.person_id)
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
    UserEducationController.createEducationInfo(req.body)
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
router.put('/:person_id', function (req, res, next) {
    UserEducationController.updateEducationInfo(req.body,req.params.person_id)
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


// router.get('/:id',function (req, res, next) {
//     UserEducationController.getUserEducationByID(req.params.id).then((data) => {
//         res.json(data);
//     });
// });
// router.get('/userPersonInfo/:PersonalInfoId', function (req, res, next) {
//     UserEducationController.findUserEducationByPersonalInfoID(req.params.PersonalInfoId)
//         .then((data) => {
//             res.json({succes: true, data: data});
//         })
//         .catch((error) => {
//             res.status(404);
//             res.json({
//                 succes: false,
//                 data: error.toString()
//             })
//         });
//
// });
//
// router.delete('/:id', function (req, res, next) {
//     UserEducationController.deleteUserEducation(req.params.id)
//         .then((data) => {
//             res.json({succes: true, data: data});
//         })
//         .catch((error) => {
//             res.status(404);
//             res.json({
//                 succes : false,
//                 data : error
//             })
//         });
// });
// router.put('/:id', function (req, res, next) {
//     UserEducationController.updateUserEducation(req.body,req.params.id)
//         .then((data) => {
//             res.json({succes: true, data: data});
//         })
//         .catch((error) => {
//             res.status(404);
//             res.json({
//                 succes : false,
//                 data : error
//             })
//         });
// });
module.exports = router;