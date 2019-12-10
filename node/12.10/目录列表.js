var http = require('http')
var fs = require('fs')

var server = http.createServer()

var wwwDir = 'D:/Movie/www'

server.on('request', function (req, res) {
    var url = req.url
    // / index.html
    // /a.txt wwwDir + /a.txt
    // /apple/login.html wwwDir + /apple/login.html
    // /img/ab1.jpg wwwDir + /img/ab1.jpg


    var filePath = '/index.html'
    if (url !== '/') {
        filePath = url
    }

    fs.readFile(wwwDir + filePath, function (err, data) {
        if (err) {
            return res.end('404 Not Found.')
        }
        fs.readdir(wwwDir, function (error, files) {
            if (error) {
                return response.end(error);
            }
            var content = '';
            files.forEach(function (item) {
                content += ` <tr>
            <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
            <td class="detailsColumn" data-value="0"></td>
            <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
            </tr>`;

            });
            data = data.toString();
            data = data.replace(content);
            res.end(data); //发送解析过后的响应命令
            console.log(files);
        })

    })
})

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('running...')
})