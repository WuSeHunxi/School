/**
 * 连接操作数据库
 * 官方文档：http://mongoosejs.com/
 * 官方指南：http://mongoosejs.com/docs/guide.html
 * 官方API：http://mongoose.com/docs/api.html
 * 
 * MongoDB数据库的基本概念：数据库(每一个集合就叫做一个数据库)  
 *                        集合(qq对象中的就是集合，集合存的是对象)  
 *                        文档(集合中的每一个对象)
 * MongoDB无需再创建库了，直接插数据就可以
 *      {qq:{users:[]},taobao:{}}
 */

//引包
var mongoose = require("mongoose");
//连接MongoDB数据库
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
});
// mongoose.Promise = global.Promise;

//在MongoDB中数据库表是集合，相当于一个数组
//创建一个模型-->设计一个数据库，MongoDB是动态的：Cat是表名，第二个参数表示name是字符串类型
var Cat = mongoose.model('Cat', {
    name: String
});

//循环插入数据
for (var i = 0; i < 100; i++) {
    //实例化一个Cat
    var kitty = new Cat({
        name: 'Zildjian'
    });
    //持久化保存kitty实例
    kitty.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow' + i);
        }
    })
}

// var kitty = new Cat({
//     name: 'Zildjian'
// });
// //持久化保存kitty实例
// kitty.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('meow');
//     }
// })