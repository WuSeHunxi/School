var fs = require("fs");
var Student = require('./student.js');
var express = require('express');
var router = exports.Router();
router.get('/students', function (req, res) {
    Student.find(function (err, students) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.rnder('index.html', {
            fruits: [
                'apples',
                'oranges',
                'bananas'
            ],
            students: students
        })
    })
})

router.get("/students/new", function (req, res) {
    res.render('new.html');
})

router.post('/students/new', function (req, res) {
    Student.save(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })
})

router.get('/students/edit', function (req, res) {
    Student.findBuId(parseInt(req.query.id), function (err, student) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.render('edit.html', {
            students: students
        });
    })
})

router.post('/students/edit', function (req, res) {
    Student.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })
})

router.get('/students/delete', function (req, res) {
    Student.deleteById(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.redirect('/students');
    })
})

module.exports = router;