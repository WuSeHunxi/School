var http = require("http");
var server = http.createServer();
server.on("request", function (request, response) {
    var url = request.url;
    
});
server.listen(3000);