/**
 * 
 * 没有DOM和BOM
 * 提供了很多的核心模块
 * Node为js提供了很多服务器级别的API
 * 例如：文件的fs模块
 *       http服务构建的http模块
 *       path路径操作的模块
 * 
 */

//require()-->用来加载模块

var os = require("os");
console.log(os.cpus()); //打印操作系统中的CPU信息

console.log(os.totalmem()); //得到内存的大小


var path = require("path");
console.log(path.extname('F:School/node/12.9/hello.txt')); //扩展名