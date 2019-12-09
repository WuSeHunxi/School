var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var fs = require("fs");
    var url = request.url;
    if (url == '/') {
        fs.readFile("./index.html", function (error, data) {
            if (error) {
                response.setHeader("Content-Type", "text/plain;charset=UTF-8");
                response.end("读取失败");
            } else {
                response.setHeader("Content-Type", "text/html;charset=UTF-8");
                response.end("读取成功");
            }
        })
    } else if (url = '/pic') {
        fs.readFile("./01.jpeg", function (error, data) {
            if (error) {
                response.setHeader("Content-Type", "text/plain;charset=UTF-9");
                response.end("失败");
            } else {
                response.setHeader("Content-Type", "image/jpeg");
                response.end(data);
            }
        })
    }
});
server.listen(3000);