/**
 * 连接操作数据库
 */

var mongoose = require("mongoose");
mongoose.connect('mongoose://loclhost/test', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var Cat = mongoose.model('Cat', {
    name: String
});
var kitty = new Cat({
    name: 'Zildjian'
});
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
})