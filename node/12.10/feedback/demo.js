var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require("url");
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
];
http.createServer(function (request, response) {
    //获取响应路径的对象
    var parseObj = url.parse(request.url, true);
    var pathname = parseObj.pathname;

})