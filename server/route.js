var express = require('express');
var router = express.Router();
var path = require('path');

router.route("/")
    .get(function (req, rep, next) {
        rep.send(" server is running");
    });

router.route("/posy")
    .post(function (req, rep, next) {
        console.log("url：" + req.url);
        console.log("账号：" + req.data.account);
        console.log("密码：" + req.body.password);
        console.log("状态：" + req.body.remember);
        rep.send(req.body.account + "||" + req.body.password + "||" + req.body.remember);
    });
module.exports = router;