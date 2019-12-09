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