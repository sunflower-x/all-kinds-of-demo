const express = require("express");
const path = require("path");

const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
// 连接
io.on("connection", (socket) => {
  console.log("a user connected");

//   广播消息
  socket.broadcast.emit('chat message','hello welcome');

//   监听消息/接收消息
  socket.on("chat message", (data) => {
    // console.log('chat message',data);
    io.emit('chat message',data);
    
  });
//   断开连接
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
server.listen(3000, function () {
  console.log("listening on port 3000");
});
