var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var url = request.url;
    if (url === '/') {
        response.end("hello");
    } else {
        response.end("world");
    }
});
server.listen(3000);