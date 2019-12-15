/**
 * 连接操作数据库
 */

//引包
var mongoose = require("mongoose");
//连接MongoDB数据库
mongoose.connect('mongoose://loclhost/test', {
    useMongoClient: true
});
// mongoose.Promise = global.Promise;

//在MongoDB中数据库表是集合，相当于一个数组
//创建一个模型-->设计一个数据库，MongoDB是动态的：Cat是表名，第二个参数表示name是字符串类型
var Cat = mongoose.model('Cat', {
    name: String
});
//实例化一个Cat
var kitty = new Cat({
    name: 'Zildjian'
});
//持久化保存kitty实例
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
})