var http = require("http");
var fs = require("fs");
var server = http.createServer();
var wwwDir = 'D:/Movie/www';
server.on("request", function (request, response) {
    var url = request.url;
    fs.readFile('./template.html', function (error, data) {
        if (error) {
            response.end(error);
        }
        fs.readdir(wwwDir, function (error, files) {
            if (error) {
                return response.end("404 Not Found FileDir");
            }
            var content = '';
            files.forEach(function (item) {
                content += ` <tr>
                    <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                </tr>`;
            })
            data = data.toString();
            data = data.replace('@_@', content);
            response.end(data);
        })
    })
})
server.listen(3000, function () {
    console.log("running ....");
})