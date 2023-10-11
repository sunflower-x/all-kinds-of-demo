const express = require("express");

const app = express();
const userRouter = require("./routers/user");

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({
    status: 200,
    msg: "ok",
  });
});

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("server is running at http://127.0.0.1:3000");
});
