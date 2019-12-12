var http = require("http");
var fs = require("fs");
var server = http.createServer();
var wwDir = fs.readdir;
server.on("request", function (request, response) {
    var url = request.url;
    fs.readFile('./template.html',function(error,data){
        
    })
})
server.listen(3000, function () {
    console.log("running ....");
})