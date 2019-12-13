/**
 * 针对文件进行操作
 */
var fs = require("fs");
var dbPath = './db.json';
/**
 * 数据操作模块：只处理数据，不关心业务
 */

/**
 * 获取所有学生列表
 * return []
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        //第一个参数是err，第二个参数是结果
        callback(null, JSON.parse(data).students);
    });
}


/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        //把对象数据转化成字符串
        var fileData = JSON.stringify({
            students: students
        })
        //把新的字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err);
            }
            //成功-->错误对象为null
            callback(null);
        });
    });
}


/**
 * 更新学生 根据id进行跟新
 */
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        //要修改谁，就要把谁找出来
        //es6中的数组方法，需要接受一个函数作为参数
        //当某个遍历项符合条件的时候就终止遍历，安徽返回结果
        var stu = students.find(function (item) {
            return item.id === student.id;
        })
        for (var key in student) {
            //不管改没改，直接覆盖就可以
            stu[key] = students[key];
        }
    });
}

/**
 * 删除学生
 */
exports.delete = function () {

}

/**
 * 如果需要获取一个函数中的异步操作的结果，则必须通过回调函数来获取
 */