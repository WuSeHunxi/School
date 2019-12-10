var http = require("http");
var fs = require("fs");
http.createServer(function (request, response) {
    var url = request.url;
    //只公开了public文件夹和index
    if (url === '/') {
        fs.readFile('./views/index.html', function (error, data) {
            if (error) {
                return response.end('404 Not Found');
            }
            response.end(data);
        })
    }
    //处理静态资源 (开放静态资源) 在index.html中请求资源文件
    else if (url.indexOf('/public/') === 0) {
        //把请求路径当成文件路径
        //哪些资源可以被用户访问，哪些不可以需要用代码控制
        fs.readFile('.' + url, function (error, data) {
            if (error) {
                return response.end("404 Not Found");
            }
            response.end(data);
        })
        console.log(url);
    } else {
        fs.readFile('./views/404.html', function (error, data) {

        })
    }
}).listen(3000, function () {
    console.log("running..");
});