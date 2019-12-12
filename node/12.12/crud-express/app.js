var express = require("express");
var fs = require("fs");
var app = express();
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public', express.static('./public/'));
app.engine('html', require("express-art-template"));
app.get('/', function (req, res) {
    //第二个参数可选，将读取到的文件按照utf-8进行编码，也可以通过data.toString()进行转换
    fs.readFile('./db.json', 'utf-8', function (error, data) {
        if (error) {
            //表示服务端有错误
            return res.status(500).send('Server error.');
        }
        console.log(data);
        res.render('index.html', {
            fruits: [
                'apple',
                'oranges',
                'bananas'
            ],
            //从文件中读取到的数据一定是字符串，所以在发送响应的时候一定要转化成对象的形式
            students: JSON.parse(data).students
        });
    })


})
app.listen(3000, function () {
    console.log('running...');
})