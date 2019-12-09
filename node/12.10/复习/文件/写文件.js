var fs = require("fs");
fs.writeFile("./world.txt", "hello world", function (error, data) {
    if (error) {
        console.log("写文件失败");
    } else {
        console.log("文件写成功");
    }
});