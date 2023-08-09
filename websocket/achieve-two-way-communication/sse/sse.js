import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.get("/clock", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  setInterval(() => {
    // res.write(`data:hello\n\n`);
    res.write(
      `id:${Math.random()}\nevent:message\ndata:${JSON.stringify({
        name: "thomas",
        age: 23,
      })}\n\n`
    );
  }, 1000);
});

app.listen(3000, function () {
  console.log("server start 3000");
});
