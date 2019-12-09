//第一个参数：要写入的文件路径
//第二个参数：要写入的文件内容
//第三个参数：回调函数

//writeFile()-->写文件

var fs = require("fs");
fs.writeFile('./你好.txt', 'kakak', function (error, data) {
    if (error) {
        console.log("写入失败" + error);
    } else {
        console.log("文件写入成功");
    }
});
/**
 * 
 * 回调函数的参数
 *      成功：error--> null
 *      失败：error-->错误对象
 */