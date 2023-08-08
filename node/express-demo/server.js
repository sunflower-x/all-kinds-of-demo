const express = require("express");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const hostname = "localhost";
const port = 3000;

function loginMiddleware(req, res, next) {
  const time = new Date();
  console.log(`${time.toLocaleString()}`);
  next();
}

const app = express();

app.use("/", indexRouter);
app.use("/api", apiRouter);
// 添加模板
app.set("views", "views");
app.set("view engine", "hbs");
// 添加静态文件
app.use(express.static("./public"));
app.use(loginMiddleware);

// 错误处理
app.use("*", (req, res) => {
  res.status(404).render("404", { url: req.originalUrl });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("500");
});

app.listen(port, () => {
  console.log(`${port}端口已开启`);
});
