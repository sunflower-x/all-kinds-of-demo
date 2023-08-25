/**
 * 所有的 Stream 对象都是 EventEmitter 的实例
 */

// // 从流中读取数据
// const fs=require('fs')
// let data=''

// // 创建可读流
// const readerStream=fs.createReadStream('./input.txt')

// readerStream.setEncoding('UTF8')

// // 处理流事件 data,end,and,error
// readerStream.on('data',function(chunk){
//     data+=chunk
// })

// readerStream.on('end',function(){
//     console.log(data);
// })

// readerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log('program is end');

// 写入流
// const fs=require('fs')
// const data='this is a beautiful day'
// const writerStream=fs.createWriteStream('./output.txt')

// writerStream.write(data,'utf8')

// // 标记文件末尾
// writerStream.end()

// writerStream.on('finish',function(){
//     console.log('写入完成');
// })
// writerStream.on('error',function(err){
//     console.log(err.stack);
// })

// console.log('program is end');

// 管道流
// const fs=require('fs')

// // 读
// const readerStream=fs.createReadStream('./input.txt')
// // 写
// const writerStream=fs.createWriteStream('./output.txt')

// readerStream.pipe(writerStream)
// console.log('program is end');

// 链式流
const fs = require("fs");
const zlib = require("zlib");

// 压缩input.txt为input.txt.gz
// fs.createReadStream('./input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))

// 解压 这里会报错,暂时不知道什么原因
fs.createReadStream("./input.txt.gz")
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream("input.txt"));

console.log("program is end");
