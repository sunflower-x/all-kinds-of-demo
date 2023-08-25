/**
 * node是单线程单进程应用程序
 */

// Node.js 有多个内置的事件，我们可以通过引入 events 模块，并通过实例化 EventEmitter 类来绑定和监听事件

// 引入events模块
const events = require("events");
// 创建eventEmitter
const eventEmitter = new events.EventEmitter();

// 事件处理函数
const connectHandler = function () {
  console.log("connect success");
  // 触发data-received函数
  eventEmitter.emit("data-received");
};

// 绑定connectHandler
eventEmitter.on("connection", connectHandler);

// 绑定data-received函数
eventEmitter.on("data-received", function () {
  console.log("received data success");
});

// 触发connection事件
eventEmitter.emit('connection')

console.log('program is end');
