var http = require("http");
var fs = require("fs");
var template = require("art-template");
var url = require('url');
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
/**
 * 
 * 本服务器的作用-->规定那些资源能够被用户访问 
 * 
 */
http.createServer(function (request, response) {
    var parseObj = url.parse(request.url, true);
    //单独获取不包含查询字符串的部分（该路径不包含问号之后的那些内容）
    var pathname = parseObj.pathname;

    /**
     * 下面的代码代表的是我让你读了你才能够访问的到（只有满足if else的条件才能够读取）
     * 
     */
    //只公开了public文件夹和index
    if (pathname === '/') {
        fs.readFile('./views/index.html', function (error, data) {
            if (error) {
                return response.end('404 Not Found');
            }
            var htmlStr = template.render(data.toString(), {
                comments: comments
            })
            response.end(htmlStr);
        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            response.end(data);
        })
    }
    //处理静态资源 (开放静态资源) 在index.html中请求资源文件
    else if (pathname.indexOf('/public/') === 0) {
        //把请求路径当成文件路径
        //哪些资源可以被用户访问，哪些不可以需要用代码控制
        fs.readFile('.' + pathname, function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            response.end(data);
        })
        console.log(pathname);
    } else if (pathname === '/pinglun') {
        //无论/pinglun后是什么都无需担心了
        // console.log("收到请求", parseObj.query);        
        response.end(JSON.stringify(parseObj.query));
    } else {
        fs.readFile('./views/404.html', function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            response.end(data);
        })
    }
}).listen(3000, function () {
    console.log("running..");
});