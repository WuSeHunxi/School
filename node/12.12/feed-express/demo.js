//npm install body-parser

var express = require("express");
var app = express();
//用来解析发送post请求的数据
var bodyParser = require("body-parser");
//中间件只解析urlencoded 请求体，并返回，只支持UTF-8编号文本，支持gzip deflate 压缩
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
var comments = [{
        name: "张三",
        message: "哇哦",
        dataTime: "2019-12-10"
    },
    {
        name: "张三2",
        message: "哇哦",
        dataTime: "2019-12-10"
    },
    {
        name: "张三3",
        message: "哇哦",
        dataTime: "2019-12-10"
    }, {
        name: "张三4",
        message: "哇哦",
        dataTime: "2019-12-10"
    },
    {
        name: "张三5",
        message: "哇哦",
        dataTime: "2019-12-10"
    }
]

//设置html模板
app.engine("html", require('express-art-template'));
app.use('/public', express.static("./public/"));
app.get('/', function (req, res) {
    res.render('index.html', {
        comments: comments
    });
})
app.get("/admin", function (req, res) {
    res.render("admin/index.html", {
        title: "管理系统"
    })
})

app.get("/post", function (req, res) {
    res.render("post.html");
})

app.post("/post", function (req, res) {
    var comment = req.body;
    comments.unshift(comment);
    res.redirect('/');
})

app.listen(3000, function (req, res) {
    console.log("app is running.....");
})