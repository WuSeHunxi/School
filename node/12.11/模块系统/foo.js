var foo = 'bar'

// exports.foo = foo;

/**
 * 导出一个对象：exports.x=xxx;
 * 导出某个成员：module.exports=xxx;--->后者会覆盖前者
 */

//如果一个模块需要直接导出某个成员，而非挂在的话需要用module.exports
module.exports = foo;

module.exports = function (x, y) {
    return x + y;
}


module.exports = { //此时导出的是一个对象
    add: function (x, y) {
        return x * y;
    },
    str: 'hello'
}
