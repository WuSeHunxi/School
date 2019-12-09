/**
 * 引入一个模块
 */
var sum = require('./require.js');

//-->exprots
var ret = sum.sum(1, 2); //函数名前面的那个是引入模块的变量
console.log(ret);

//-->module
// var ret = sum(1, 2);
// console.log(ret);