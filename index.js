var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app = express();
var port = 8000;

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (request, response) {
    response.sendFile(__dirname + '/contact.html');
});

app.get('/courses', function (req, res) {
    fs.readFile('courses.json', 'utf8', function (err, data) {
        var courses = JSON.parse(data);
        res.locals = {
            courses: courses
        };
        res.render('courses.ejs');
    })
});

app.get('/course/:id', function (req, res) {
    fs.readFile('courses.json', 'utf8', function (err, data) {
        var courses = JSON.parse(data);
        var course = products.filter(function (obj) {
            return obj.id === parseInt(req.params.id)
        })[0];

        res.locals = {
            course: course
        }
        res.render('course.ejs')

    })
});



app.listen(port);
console.log('Server running on http://localhost:' + port);
