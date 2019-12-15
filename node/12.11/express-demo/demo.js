var express = require("express");
var app = express();
app.use("/public/", express.static("./public/"));
app.use("/static/", express.static("./public/"));
app.get("/about", function (request, response) {
    //express返回响应的操作是response.send()
    //http返回响应的操作是response.end()
    response.send(
        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <h1>hello express</h1>
</body>

</html>`);
})
app.listen(3000, function () {
    console.log("app is running...");
})