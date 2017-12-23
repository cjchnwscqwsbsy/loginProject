var express = require('express');
var router = express.Router();
var path = require('path');

router.route("/")
    .get(function (req, rep, next) {
        rep.send(" server is running");
    });

router.route("/posy")
    .post(function (req, rep, next) {
        rep.send(" server is running" + req.data);
    });
module.exports = router;