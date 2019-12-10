var fs = require("fs");
fs.readdir("D:/Movie/www", function (error, data) {
    if (error) {
        return console.log("目录不存在");
    }
    console.log("存在");
})