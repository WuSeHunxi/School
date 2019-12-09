/**
 * 浏览器的js不能操作文件
 * Node可以操作文件
 * fs-->file-system的简写，在Node中想要操作文件的话就必须要引入fs这个模块
 * fs.readFile-->读取文件 
 */

//使用require方法加载fs这个模块
var fs = require('fs');


//第一个参数：文件路劲
//第二个参数：文件内容
//第三个参数：回到函数
fs.write('./12.9/你好/txt', 'kakak', function (error) {
    console.log("文件写入成功");
});