var fs = require("fs");
fs.readdir('D:/Movie/www', function (err, files) {
    if (err) {
        return console.log("目录不在");
    }
    //找到目录，并将目录中的内容都输出
    console.log("找到目录" + files);
})