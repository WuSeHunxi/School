/**
 * 
 * setHeader()-->
 * Content-Type-->用来告知对方给你发送的数据内容是什么类型
 */

var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    console.log(request.url);
    console.log("请求我的客户端的端口号是：" + request.socket.remoteAddress, request.socket.remotePort);
    var url = request.url;
    if (url === './plain') {
        response.setHeader("Content-type", 'text/plain;charset=UTF-8');
        response.end("hello");
    } else {
        //需要告诉浏览器发送的是指定格式的文本
        response.setHeader('Content-Type', 'text/html;charset=UTF-8')
        response.end("<p><a href=''>点我</a></p>");
    }
})
server.listen(3000);