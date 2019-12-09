/**
 * 在Node中，模块有三种
 *      具名的核心模块
 *      自己编写的模块
 * require()-->加载执行模块中的代码
 *          -->拿到被夹在文件模块的接口对象
 * exports接口对象（默认是空的）
 * 
 * 相对路径中的'./'不能省略
 * 文件的后缀名是可以省略的
 */
// console.log("开始执行a");
var ret = require('./b.js');
// console.log("a执行结束");

console.log(ret.foo);

console.log(ret.add(10, 20));

console.log(ret.readFile('./a.js'));

//Node中没有全局作用域