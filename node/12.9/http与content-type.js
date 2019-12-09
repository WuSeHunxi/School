var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    console.log(request.url);
    console.log("请求我的客户端的端口号是：" + request.socket.remoteAddress, request.socket.remotePort);
})
server.listen(3000);