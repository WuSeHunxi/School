console.log(__filename); //-->文件名的全路径（包含文件名）
console.log(__dirname); //-->文件的路径（不包含文件名）
// F: \School\ node\ 12.9\ globals.js
// F: \School\ node\ 12.9

//定时器的使用
var time = setTimeout(function () {
    console.log("12");
}, 1000);
// clearTimeout(time);//还没等定时器执行就被清空了

//解决方法
setTimeout(function () {
    clearTimeout(time);
}, 2000);

//node中没有window，只有global（可省略）
global.console.log("pap");


/*
    进程的一些属性
*/
//argv是一个数组，默认情况下，前两项数据分别是：node.js环境的路径；当前执行的js文件的全路径
//从第三个参数开始，表示命令行参数，用来接收参数
console.log(process.argv);

//arch-->打印当前系统的架构（多少位64？32？）
console.log(process.arch);


