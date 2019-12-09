var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var url = request.url;
    if (url === '/') {
        response.end('index.Page');
    } else if (url === '/login') {
        response.end("login.Page");
    } else {
        response.setHeader("Content-Type", "text/plain;charset=UTF-8");
        // response.setHeader("Content-Type", "text/plain;charset=UTF-8");
        response.end("失败");
    }
});
server.listen(3000);