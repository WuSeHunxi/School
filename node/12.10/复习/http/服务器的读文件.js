var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var fs = require("fs");
    fs.readFile("./hello.txt", function (error, data) {
        if (error) {
            console.log("文件读失败" + error);
        } else {
            console.log("文件读成功");
            response.end(data);
        }
    })
});
server.listen(3000);