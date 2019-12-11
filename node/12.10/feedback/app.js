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

        /**
         * 一次请求只能对应一次响应
         */

        // response.end(JSON.stringify(parseObj.query));
        //接下来需要做的事
        //1.获取表单提交的数据
        //2.生成日期到数据对象中，存储到数组中
        //3.让用户重定向跳转到首页，使原页面更新
        var comment = parseObj.query; //接收表单提交的数据
        comment.dataTime = '';
        comments.push(comment); //存储表单提交的数据
        //此时服务端已经把数据存储好了，现在需要的就是让用户重新请求

        //如何通过服务器让客户端重定向
        /**
         * 1.状态码设置为302临时重定向
         * statusCode
         * 2.在响应头中通过location告诉客户端往哪重定向
         * setHeader()
         * 如果客户端发现收到服务器的响应转态码是302，就会自动去响应头中中找location，实现用户自动跳转
         * 
         */
        response.statusCode = 302;
        //重新请求127.0.0.1:3000
        response.setHeader('Location', '/');
        response.end(); //结束响应
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

/**
 * 如何自己完成该项目？
 * 1.当请求/的时候响应index.html
 * 2.开放public目录中的静态资源，当请求/public/xxx的时候，读取响应public目录中的具体资源
 * 3./post时，响应post.html
 * 4./pinglun-->接受表单提交数据，存储表单提交的数据，让表单重定向到根路径
 */