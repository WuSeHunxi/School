/**
 * 浏览器的js不能操作文件
 * Node可以操作文件
 * fs-->file-system的简写，在Node中想要操作文件的话就必须要引入fs这个模块
 * fs.readFile-->读取文件 
 */

//使用require方法加载fs这个模块
var fs = require('fs');

//读文件 第一个参数：要读取的文件路径  第二个参数：一个回调函数
/**
 * 回调函数的参数：
 *      error：
 *          如果读取失败，error就是错误对象
 *          如果读取成功，error及时null
 *      data：
 *          如果读取成功，data就是读取到的数据
 *          如果读取失败，error就是错误对象
 */
fs.readFile('./hello1.txt', function (error, data) {
    // console.log(data);
    // //输出的结果是16进制
    if (error) {
        console.log("读取文件失败了" + error); //生成错误对象
    } else {
        console.log(data.toString()); //将得到的结果转成字符串
    }
});