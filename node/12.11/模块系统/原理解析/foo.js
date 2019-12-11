/**
 * 在Node中，每一个模块的内部都有一个自己的modul对象
 * 该modul对象有一个成员是exports，他是一个空对象
 * 
 * 谁require我，谁就能够得到modul.exports
 * 默认情况下代码的最后一句是：return module.exports，不是exports
 * exports是modul.exports的引用，如果想单独导出一个值的时候不能使用exports，因为这会导致该引用指向了其他的地方
    exports='hello';-->错误使用
 */


// console.log(exports === module.exports);//-->二者的指向相同

//二者指向同一个对象，因此等价，用谁导出都可以

//添加成员
exports.foo = 'foo';
exports.add = function (x, y) {
    return x + y;
}


// exports.a = 123;
// exports = 'hello';
// module.exports.b = 'asd';
// module.exports = 'ppp';//-->导出单个的

//一般情况很少一起使用

exports.b = 'ala';
module.exports = 'lalal';