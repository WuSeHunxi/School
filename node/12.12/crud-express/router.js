/**
 * 路由在这个文件中，方便进行处理，结构清晰
 */



//将路由提取出来
var fs = require("fs");
var Student = require('./student.js');


var express = require("express");
//1.创建一个路由容器 -->创建路由对象挂载路由
var router = express.Router();

//2.把路由都挂在到router路由容器中
router.get('/students', function (req, res) {

    //第二个参数可选，将读取到的文件按照utf-8进行编码，也可以通过data.toString()进行转换
    // fs.readFile('./db.json', 'utf-8', function (error, data) {
    //     if (error) {
    //         //表示服务端有错误
    //         return res.status(500).send('Server error.');
    //     }
    //     console.log(data);
    //     res.render('index.html', {
    //         fruits: [
    //             'apperle',
    //             'oranges',
    //             'bananas'
    //         ],
    //         //从文件中读取到的数据一定是字符串，所以在发送响应的时候一定要转化成对象的形式
    //         students: JSON.parse(data).students
    //     });
    // })
    Student.find(function (err, students) {
        if (err) {
            //表示服务端有错误
            return res.status(500).send('Server error.');
        }
        res.render('index.html', {
            fruits: [
                'apperle',
                'oranges',
                'bananas'
            ],
            students: students
        })
    })
})

router.get('/students/new', function (req, res) {
    res.render('new.html');
})

router.post('/students/new', function (req, res) {
    //获取表单数据
    //处理:将数据保存到db.json中，用以持久化
    //发送响应:先读取出来，转成对象，然后将内容添加到对象中，然后再把对象转成字符串重新添加到db.json中
    // console.log(req.body);

    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        }
        res.redirect('/students');
    })
})

router.get('/students/edit', function (req, res) {
    //在客户端的列表页中处理链接问题（需要有id）
    //获取要编辑的学生id
    //渲染编辑页面:根据id查找学生id；渲染页面
    Student.findById(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('Server error.');
        }
        res.render('edit.html', {
            student: student
        });
    })

})
router.post('/students/edit', function (req, res) {
    //获取表单数据：req.body
    //更新
    //发送响应
    // console.log(req.body);
    Student.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        }
        res.redirect('/students');
    })
})

router.get('/students/delete', function (req, res) {
    //获取要删除的id
    //根据id执行删除操作
    //根据操作结果发送响应
    // console.log(req.body.id);
    Student.deleteById(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        }
        res.redirect('/students');
    })
})
//3.把router导出
module.exports = router;


// module.exports = function (app) {
//     app.get('/', function (req, res) {
//         //第二个参数可选，将读取到的文件按照utf-8进行编码，也可以通过data.toString()进行转换
//         fs.readFile('./db.json', 'utf-8', function (error, data) {
//             if (error) {
//                 //表示服务端有错误
//                 return res.status(500).send('Server error.');
//             }
//             console.log(data);
//             res.render('index.html', {
//                 fruits: [
//                     'apple',
//                     'oranges',
//                     'bananas'
//                 ],
//                 //从文件中读取到的数据一定是字符串，所以在发送响应的时候一定要转化成对象的形式
//                 students: JSON.parse(data).students
//             });
//         })
//     })

//     app.get('/student/new', function (req, res) {

//     })

//     app.get('/student/new', function (req, res) {

//     })

//     app.get('/student/new', function (req, res) {

//     })
//     app.get('/student/new', function (req, res) {

//     })
// }