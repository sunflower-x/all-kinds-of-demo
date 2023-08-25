/**
 * 回调函数一般作为函数的最后一个参数出现：
 * function foo1(name, age, callback) { }
 * function foo2(value, callback1, callback2) { }
 */

// 堵塞代码实例
// const fs=require('fs')
// const data=fs.readFileSync('./input.txt')
// console.log(data.toString());
// console.log('program is end');

// 非堵塞代码实例
const fs = require("fs");
fs.readFile("./input.txt", function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data.toString());
  }
});
console.log('program is end');
