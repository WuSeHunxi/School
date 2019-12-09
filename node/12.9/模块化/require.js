/**
 * 模块化开发：
 *  传统的非模块话开发的缺点：
 *      1.命名冲突
 *      2.文件依赖
 *  前端标准的模块化规范：
 *      1.AMD - requirejs
 *      2.CMD - seajs
 *  服务器端的模块化规范：
 *      1.CommonJS - Node.js
 *  模块化的相关规则：
 *      1.如何定义：一个js文件就是一个模块，模块内部的成员都是独立的 
 *      2.模块成员的导出和引入  
 *  已经加载的模块会被缓存，有利于提高性能
 */

var sum = function (a, b) {
    return parseInt(a) + parseInt(b);
}

//导出模块成员 --exprots
exports.sum = sum;

//导出模块成员 --module
// module.exports = sum;