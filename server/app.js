/**
 * Created by xrk on 17-12-11.
 */
const http = require('http');
const express = require('express');
var util = require('util');
var bodyParser = require('body-parser');
var moment = require('moment');

//CORS统一设置
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};

const route = require('./route');
const app = express();

app.use(allowCrossDomain);
app.use(function (req, res, next) {
    next(err);
});

app.use(function (err, req, res, next) {
    const url = req.originalUrl;
    const timestamp=moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(`[${timestamp}] ${req.method} ${url}`);
    console.log(req.toString());
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use('/', route);

const server = http.createServer(app).listen(8081);
server.on('listening', function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});