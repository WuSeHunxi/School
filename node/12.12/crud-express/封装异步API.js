function fn(callback) {
    setTimeout(() => {
        var data = 'hello';
        /**
         * 回到函数的目的：获取异步操作的结果
         */
        callback(data);
    }, 1000);
}
fn();

//只能通过回调函数才能获取data
//如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
fn(function (data) {
    console.log(data);
})