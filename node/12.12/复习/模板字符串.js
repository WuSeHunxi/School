var http = require("http");
var fs = require("fs");
var server = http.createServer();
var template = require("./node_modules/art-template");
server.on("request", function (request, response) {
    fs.readFile("./index.html", function (error, data) {
        if (error) {
            response.end(error);
        }

        response.setHeader("Content-Type", "text/html;charset=UTF-8");
        template.render(data.toString(), {
            name: "pap",
            age: 12,
            sex: '男'
        })
    })
})
server.listen(3000, function () {
    console.log("running...");
})