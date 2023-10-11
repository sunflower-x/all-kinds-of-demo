const mongoose = require("mongoose");
const db = mongoose
  .connect("mongodb://119.91.138.137:27017/test", {})
  .then((con) => {
    console.log("数据库连接成功");
  });

module.exports = db;
