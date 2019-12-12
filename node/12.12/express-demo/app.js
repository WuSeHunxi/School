var express = require("express");
var app = express();

//基本路由-->有具体的映射关系
//PS: 可以进行链式操作，因为返回的是app
app.get('/', function (req, res) {
    // res.end("")
    res.send("hello");
});

/**
 * post请求
 * app.post('/',function(req,res){
 *      consolr.loh("running");
 * })
 * 
 */


//处理静态资源  当省略第一个参数的时候，可以通过省略public来访问
app.use('/public',express.static('./public'));

//
app.use(express.static('public'));

app.listen(3000, function () {
    console.log("running");
})


//npm install --global nodemon安装才能使用
//nodemon app.js-->随变化而运行app.js