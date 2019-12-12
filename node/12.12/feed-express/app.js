var express = require("express");
var app = express();

//第一个参数表示渲染的是以.art结尾的文件，express-art-template用来把art-template整合到express中
app.engine('html', require('express-art-template'));
//res.render('html模板名',{模板数据})
//默认第一个参数不能写路径，直接去views中寻找文件，因此需要把所有的html文件都放在views中


app.use('/public', express.static('./public/'));
app.get('/', function (req, res) {
    // res.send('/page');
    res.render('index.html', {
        comments: comments
    }); //后缀名要和app.engine()中的第一个参数相同
})

//如果想要修改默认的views目录，则可以app.set('views',render函数的默认路径)

app.get('/admin', function (req, res) {
    res.render('admin/index.html', {
        title: "管理系统"
    }); //相对于views寻找的index.html
})

app.get("/post", function (req, res) {
    res.send('post.page');
})

app.listen(3000, function (req, res) {

});

/**
 * 在Express中使用模板引擎
 * 安装： npm install--save art - template express - art - template
 */