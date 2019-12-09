var http = require("http");

//2.使用http.createSever()返回一个web服务器，返回一个Server实例
var server = http.createServer();

//request请求事件处理函数，需要接收两个参数
//Request请求对象-->用来获取客户的一些信息，例如：请求路径
//Response响应对象-->可以给客户发送响应信息
server.on('request', function (request, response) {
    console.log("收到客户端的请求了");
    console.log("收到客户端的请求了，请求路径是：" + request.url);

    //reponse -->响应 ，write用来给用户发送响应数据
    response.write('hello'); //往响应中写数据
    //写完数据要结束end
    response.end(); //可以将结果返回给用户了
})

//4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log("服务器启动成功了，可以访问了");
})