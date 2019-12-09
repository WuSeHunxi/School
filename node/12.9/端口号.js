/**
 * 所有联网的程序都需要进行网络通信
 * 
 * 网卡是通过唯一的ip地址进行定位的
 * 
 * ip地址定位计算机
 * 端口号定位具体的应用程序
 * 所有需要联网通信的软件都必须有端口号
 * 
 * 端口号只要浏览器知道即可，用户不需要知道
 */

//获取端口号

var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    console.log(request.url);
    console.log("请求我的客户端的端口号是：" + request.socket.remoteAddress, request.socket.remotePort);
})
server.listen(3000);