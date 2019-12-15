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

exports.updateById = function (student, callback) {
    fs.readFile(dbPath, 'utf-8', function (err, data) {
        if (err) {
            return callback(err);
        }
        var students = JSON.parse(data).students;
        student.id = parseInt(student.id);
        var stu = students.find(function (item) {
            return item.id === student.id;
        })
    })
}