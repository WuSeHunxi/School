var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var fs = require("fs");
    fs.writeFile("./world.txt", "hello world", function (error, data) {
        if (error) {
            console.log(error);
        } else {
            response.end(data);
        }
    });
})
server.listen(3000);