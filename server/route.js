var express = require('express');
var path = require('path');
var router = express.Router();
// router.route("/")
//     .get(function (req, rep, next) {
//         var options = {
//             root: path.join(__dirname, '../') + '/public/',
//             dotfiles: 'deny',
//             headers: {
//                 'x-timestamp': Date.now(),
//                 'x-sent': true
//             }
//         };
//         rep.sendFile('/', options, function (err) {
//             if (err) {
//                 console.log(err);
//                 rep.status(err.status).end();
//             } else {
//                 console.log('Send: ', 'success');
//             }
//         });
//     });
router.route("/posy")
    .post(function (req, rep, next) {
        console.log("账号：" + req.body.account);
        console.log("密码：" + req.body.password);
        console.log("状态：" + req.body.remember);
        rep.send(true);
    });
module.exports = router;