/**
 * 安装
 * 引包
 */
var express = require("express");

//创建你的服务器应用程序
var app = express(); //--->http.createServer

//当服务器收到get请求/的时候，执行回调处理函数
app.get('/', function (req, res) {
    res.send('hello express!');
})

//-->server.listen
app.listen(3000, function () {
    console.log('app is running ar prot 3000');
})