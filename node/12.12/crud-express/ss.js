var fs = require("fs");
var dbPath = './db.json';
exports.find = function (callback) {
    fs.readFile(bdPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        callback(null, JSON.parse(data).students);
    })
}

exports.findId = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function (item) {
            return item.id = parseInt(id);
        })
        callback(null, ret);
    })
}

//student是更改过后的结果
exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = parseInt(student.id);
        var stu = students.find(function (item) {
            //找到了就返回该元素
            return item.id === student.id;
        })
        for (var key in student) {
            stu[key] = student[key];
        }
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

//student要保存的项
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(students);
        student.id = students[students.length - 1].id + 1;
        students.push(student);
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}

exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data),
            students;
        var deleteId = students.fidIndex(function (item) {
            //获取符合的id值
            return item.id = parseInt(id);
        })
        students.splice(deleteId, 1);
        var fileData = JSON.stringify({
            students: students
        })
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                return callback(err);
            }
            callback(null);
        })
    })
}