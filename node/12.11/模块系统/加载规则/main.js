require("./a");
/**
 * 优先在缓存中加载：
 *      由于在a中已经加载过b了，所以这里就不会再重复加载b(可以拿到接口对象，但是不会再执行代码)，
 *      这样做的摸底是为了避免重复加载，提高加载效率
 */
var fn = require("./b");
console.log(fn);