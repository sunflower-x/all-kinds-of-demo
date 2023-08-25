// demo01
// function say(args){
//     console.log(args);
// }

// function execute(somefun,args){
//     somefun(args)
// }

// execute(say,'thomas')

// 匿名函数
// function execute(somefun,args){
//     somefun(args)
// }

// execute(function(args){console.log(args);},'jack')

// 函数传递是如何让HTTP服务器工作的
const http=require('http')
// http.createServer(function(req,res){
//     res.writeHead({"Content-type":"text/plain"})
//     res.write('hello world')
//     res.end()
// }).listen(8080)

// 也可以写成这种方式

function onRequest(req,res){
    res.writeHead(200,{"Content-type":"text/plain"})
        res.write('hello world')
        res.end()
}
http.createServer(onRequest).listen(8080)

