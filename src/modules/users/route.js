var express = require('express');
var router = express.Router();
var UsersController = require('./controller');

router.get('/', function (req, res, next) {
    UsersController.getAllUsers()
        .then((data) => {
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
    UsersController.createUser(req.body)
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

})
router.post('/login', function (req, res, next) {
    UsersController.login(req.body.username,req.body.password)
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

router.get('/:id',function (req, res, next) {
    UsersController.getUserByID(req.params.id).then((data) => {
        res.json(data);
    });
});
router.delete('/:id', function (req, res, next) {
    UsersController.deleteUser(req.params.id)
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
    UsersController.updateUser(req.body,req.params.id)
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
