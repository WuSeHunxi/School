/**
 * 
 * setHeader()-->
 * Content-Type-->用来告知对方给你发送的数据内容是什么类型
 */

var http = require("http");
var fs = require("fs");
var server = http.createServer();
server.on("request", function (request, response) {
    console.log(request.url);
    console.log("请求我的客户端的端口号是：" + request.socket.remoteAddress, request.socket.remotePort);
    var url = request.url;
    // if (url === './plain') {
    //     response.setHeader("Content-type", 'text/plain;charset=UTF-8');
    //     response.end("hello");
    // } else {
    //     //需要告诉浏览器发送的是指定格式的文本
    //     response.setHeader('Content-Type', 'text/html;charset=UTF-8')
    //     response.end("<p><a href=''>点我</a></p>");
    // }
    if (url === '/') {
        //动态读取文件
        fs.readFile("./resource/index.html", function (error, data) {
            if (error) {
                response.setHeader("Content-Type", "text/plain;charset=UTF-8");
                response.end("文件读取失败，请重试");
            } else {
                response.setHeader("Content-Type", "text/html;charset=UTF-8");
                response.end(data);
            }
        })
    } else if (url === '/01') { //01.jpeg并非文件路径
        fs.readFile("./resource/01.jpeg", function (error, data) {
            if (error) {
                response.setHeader("Content-Type", "text/plain;charset=UTF-8");
                response.end("文件读取失败");
            } else {
                //图片不需要制定编码
                //编码是字符编码，而图片非字符
                response.setHeader("Content-Type", "image/jpeg;");
                response.end(data);
            }
        });
    }
})
server.listen(3000);