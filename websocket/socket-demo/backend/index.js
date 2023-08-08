//socket.io
const express = require("express");
const app = express();
var server = require("http").Server(app);
const creatSocket = require("./socketIO/socket"); //引入socket
 creatSocket(server, {
  "force new connection": true,
  reconnectionAttempts: "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
  timeout: 10000, //before connect_error and connect_timeout are emitted.
  transports: ["websocket"],
});

server.listen(8081, () => {
  console.log("启动了");
}); //socket.io监听的端口号和客户端、koa2端口都不能一样
