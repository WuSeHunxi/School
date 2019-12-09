console.log("b.js执行了");

var foo = 'haha';

//想导出谁就要用exports.谁
exports.a = foo;

exports.add = function (x, y) {
    return x + y;
}

exports.readFile = function (path, callback) {
    console.log('文件路径', path);
}