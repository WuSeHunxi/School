/**
 * 一般情况下，把函数作为参数的目的就是为了获取函数内部的异步操作结果
 * 异步操作：setTimeout,readFile,writeFile,ajax（因为他们都需要接收一个回调函数）
 * 代码在执行的过程中不会等待定时器
 * js的事件循环，单线程
 * 
 */

//callback是回调函数
function add(x, y, callback) {
    setTimeout(() => {
        var ret = x + y;
        callback(ret); //回调函数
    }, 1000);
}
add(10, 20, function (ret) {
    console.log(ret);
})