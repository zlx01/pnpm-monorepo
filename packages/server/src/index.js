import printPoem from "common";
import express from "express";
import _ from "lodash";

// 可以使用项目共享的lodash依赖以及当前项目的模块依赖
printPoem(_.random(10, 20));

const app = express();
const port = 8080;

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Host", "*");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
