/**
 * 使用Node创建一个服务器
 *      Node中的核心模块：http
 * http这个模块的职责：创建编写服务器的
 * 
 */



//1.加载http核心模块
var http = require("http");

//2.使用http.createSever()返回一个web服务器，返回一个Server实例
var server = http.createServer();

//3.提供服务器对数据的服务
/**
 * 发送请求
 * 接收请求
 * 处理请求
 * 发送响应
 * 注册request请求事件
 * 当客户端发送请求时，就会自动触发服务器的request请求事件，然后执行第二个参数（回调处理）
 * 
 */
server.on('request', function () {
    console.log("收到客户端的请求了");
})

//4.绑定端口号，启动服务器
server.listen(3000, function () {
    console.log("服务器启动成功了，可以访问了");
})