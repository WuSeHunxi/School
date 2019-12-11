/**
 * 安装
 * 引包
 */
var express = require("express");

//创建你的服务器应用程序
var app = express(); //--->http.createServer

//公开指定目录  可以直接通过/public/xx的方式访问public目录下的所有资源
app.use('/public/', express.static('./public/'));

//当服务器收到get请求/的时候，执行回调处理函数
app.get('/', function (req, res) {
    res.send('hello express!');
})

//此时请求其他的路径的时候不需要再if-else了，可以直接使用xx.get进行路径修改
app.get('/about', function (req, res) {
    // res.send('world express!');
    //直接将下面的字符串进行编码了，不需要再手动写了
    res.send(
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>hello express</h1>
</body>

</html>`
    );
})

//-->server.listen
app.listen(3000, function () {
    console.log('app is running ar prot 3000');
})