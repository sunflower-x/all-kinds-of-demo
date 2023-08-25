/*
1. 使用require来加载和引入模块
const module=require('./module-name');
2. 创建服务器
*/


//引入http模块 
const http = require('http');
//创建服务器
const server=http.createServer(function(req,res){
    // 响应头
    res.writeHead(200,{'Content-Type':'text/plain'})
    // 响应数据
    res.end('Hello World')
})
// 监听端口
server.listen('8080')

console.log('server running at http://localhost:8080/');


