/**
 * 引入模块：require("xxx")-->xxx:第三方模块；核心模块；自己写的模块
 * 访问网址要开启服务器
 * 请求网址：request.url
 * 请求路径名：request.url.pathname
 * response.end("xxx") -->相应返回的结果
 * 使用模板字符串template：template.render(data.toString(),{对象})
 * 对于静态文件，自己规定是否可以进行访问，项目的html文件访问的外部文件路径就是静态文件的路径
 *     对于静态文件来说，是不需要在网址中进行访问的，它是网页内部(例如：index.html等)link的资源文件
 * 接收表单提交的数据：request.url.query
 * 
 * 
 */