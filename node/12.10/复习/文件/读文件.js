var fs = require('fs');
fs.readFile("./hello.txt", function (error, data) {
    if (error) {
        console.log("文件读取失败" + error);
    } else {
        console.log("文件读取成功");
        // fs.end(data.toString());
    }
});