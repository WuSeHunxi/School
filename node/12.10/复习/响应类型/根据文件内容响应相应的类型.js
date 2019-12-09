var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var fs = require("fs");
    fs.readFile("./index.html", function (error, data) {
        if (error) {
            response.setHeader("Content-Type", "text/plain;charset=UTF-8");
            console.log("读取文件失败");
        } else {
            response.setHeader("Content-Type", "text/html;charset=UTF-8");
            console.log("读取文件成功");
            response.end(data);
        }
    })
})
server.listen(3000);