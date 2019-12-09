console.log("b.js执行了");

var foo = 'haha';

exports.foo = 'hello';

exports.add = function (x, y) {
    return x + y;
}