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
    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return response.end('404 Not Found');
            }
            var htmlStr = template.render(data.toString(), {
                comments: comments
            });
            response.end(htmlStr);
        })
    } else if (pathname === '/post') {
        fs.readFile("./views/post.html", function (err, data) {
            if (err) {
                return response.end('404 Not Found');
            }
            response.end(data);
        })
    } else if (pathname === '/pinglun') {
        //提交评论的内容
        var comment = parseObj.query;
        comments.push(comment);
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
    } else if (pathname.indexOf('/public/') === 0) {
        fs.readFile('.' + pathname, function (err, data) {
            if (err) {
                return response.end('404 Not Found');
            }
            response.end(data);
        })
    } else {
        fs.readFile("./views/404.html", function (err, data) {
            if (err) {
                return response.end("404 Not Found");
            }
            response.end(data);
        })
    }
}).listen(3000, function () {
    console.log("running~~~");
})