/**
 * Created by xrk on 17-12-11.
 */
const http = require('http');
const express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var cookieParser = require('cookie-parser');
var proxy = require('express-http-proxy');
var cookieSession = require('cookie-session');
//CORS统一设置
// var allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Credentials','true');
//     next();
// };

const route = require('./route');
const app = express();

app.use(cookieParser());
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/proxy', proxy('www.baidu.com'));
app.use('/', route);
app.use(express.static('public'));
app.use(cookieSession({
  name: 'abcdefg', // 手动设置session名
  keys: ['aaa', 'bbb', 'ccc'], // 手动设置session密钥
  maxAge: 24 * 60 * 60 * 1000 // 手动设置session过期时间，单位
}));
//错误处理器,和其他中间件的唯一区别是4个参数
app.use(function (err, req, res, next) {
    const url = req.originalUrl;
    const timestamp=moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(`[${timestamp}] ${req.method} ${url}`);
    console.log(req.toString());
    next();
});

const server = http.createServer(app).listen(9527);
server.on('listening', function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
