/*
    模块文件的后缀3种情况：.js .json .node
    上述三种模块的加载优先级(不加文件后缀时的优先级)：.js -> .json -> .node
*/
// require('./07');
// console.log(global.flag);

// var m = require('./data.json');
// console.log(m.username);

// var m = require('./addon.node');
// // console.log(typeof m);
// var ret = m.hello();
// console.log(ret);

var m = require('./data');
// console.log(m);
var ret = m.hello();
console.log(ret);