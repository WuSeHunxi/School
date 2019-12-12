var http = require("http");
var fs = require("fs");
var server = http.createServer();
server.on("request", function (request, response) {
    fs.readFile("./hello.txt", function (error, data) {
        if (error) {
            response.end(error);
        }
        response.end(data.toString());
    })
})
server.listen(3000, function () {
    console.log("running...");
})