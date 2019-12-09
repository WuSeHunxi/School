var http = require("http");

//创建server
var server = http.createServer();
//监听请求事件，设置请求的处理函数
server.on("request", function (request, response) {
    console.log(request.url);
    //当端口号是80的时候可以省略，直接输入127.0.0.1即可
    // response.end("hello"); //发送响应数据的同时结束访问

    //根据不同的响应路径发送不同的响应结果
    //request.url获取到的是端口号之后的路径，是以/开头的
    var url = request.url;
    // if (url === '/') {
    //     response.end('index.page');
    // } else if (url === '/login') {
    //     response.end("/login.page");
    // } else {
    //     response.end("404 Not Found");
    // }

    if (url === '/products') {
        var products = [{
            name: "apple",
            price: 8000
        }, {
            name: "orange",
            price: 9000
        }]
    }
    //响应数据只能是字符串或者是二进制的数据
    response.end(JSON.stringify(products));
});

//启动服务器
server.listen(3000);