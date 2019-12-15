/**
 * 在这个文件中处理的都是一些导入，配置监听服务等操作
 * 
 */



var express = require("express");
var fs = require("fs");
var router = require("./router");
var app = express();
var bodyParser = require('body-parser');
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public', express.static('./public/'));
app.engine('html', require("express-art-template"));
//配置的任何东西都要在挂在路由之前
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
//把路由容器挂载到app服务中
app.use(router);
app.listen(3000, function () {
    console.log('running...');
})

module.exports = app;