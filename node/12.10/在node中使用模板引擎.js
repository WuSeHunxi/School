//art-template()-->浏览器和Node都可以使用

/**
 * 安装：npm install art-template-->该命令在哪执行就会把包下载到哪
 * 
 * 在Node中使用atr-template模板引擎
 * 最早开始是在服务端，后来出现在前端
 * 
 */

//加载核心模块  在使用npm下载时install的是谁require中的就是谁
var template = require("art-template");
var fs = require("fs");
fs.readFile("./tpl.html", function (error, data) {
    if (error) {
        return console.log("读取文件失败了");
    }
    var ret = template.render(data.toString(), {
        name: "kaka",
        age: 18,
        provice: '北京',
        hobbies: ['写代码', '学习', '看视频']
    })
    console.log(ret);
})

//核心方法
template.render('模板字符串', '替换对象');

// var ret = template.render('hello{{name}}', {
//     name: "pappa"
// });
// console.log(ret);