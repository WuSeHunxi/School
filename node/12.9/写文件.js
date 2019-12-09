//第一个参数：文件路劲
//第二个参数：文件内容
//第三个参数：回调函数

//writeFile()-->写文件

var fs = require("fs");
fs.writeFile('./hello.txt', 'kakak', function (error, data) {
    console.log("文件写入成功");
});