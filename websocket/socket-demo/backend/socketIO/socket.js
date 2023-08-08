const IO = require("socket.io");

function creatSocket(app) {
  const io = IO(app);
  io.on("connection", function (socket) {
    console.log("连接到ws，id", socket.id);
    /* socket.on("join", (room) => {
      console.log(`用户${socket.id}进入房间${room}`);
      socket.join(room);
      socket.on("interact", function (data) {
        console.log(data);
        socket.to(room).emit("interact", data);
      });
    }); */
    /* socket.join("KPL");
    socket.on("talk", (message) => {
        console.log(message);
        socket.emit("talk", message); // 发送给房间里的每个人，除了发送者
    }); */

    socket.on("hello", (data) => {
      console.log(data);
      socket.emit('replay','我很好,你最近怎么样了?')
    });

    // socket.emit("send", "hello everybody");

    socket.on("disconnect", () => {
      console.log("断开了");
    });
  });
}
module.exports = creatSocket;
