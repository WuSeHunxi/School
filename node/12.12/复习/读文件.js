var fs = require("fs");
fs.readFile("./hello.txt", function (error, data) {
    if (error) {
        console.log("读取文件失败");
    } else {
        console.log(data.toString());
    }
})