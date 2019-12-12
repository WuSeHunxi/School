var url = require("url");
//只要是使用url.parse()就会解析url,第二参数为true的时候能够通过对象得出url中的query这一项
var data = url.parse("./pinglun?name=laal&word=lalal", true);
console.log(data);