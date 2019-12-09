var http = require("http");

//创建server
var server = http.createServer();
//监听请求事件，设置请求的处理函数
server.on("request", function (request, response) {
    console.log(request.url);
    //当端口号是80的时候可以省略，直接输入127.0.0.1即可
});

//启动服务器
server.listen(3000);