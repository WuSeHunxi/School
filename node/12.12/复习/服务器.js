var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    response.end("jsjsj");
})
server.listen(3000, function () {
    console.log("running...");
})