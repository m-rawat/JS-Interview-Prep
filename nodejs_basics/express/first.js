const express = require("express");
const fs = require("fs");
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  fs.appendFile("./logs.txt", `\n${req.method} ${req.path}\n`, (err) => {
    if (!err) {
      next();
    } else {
      res.json({ status: false, message: `error in logging ${err}` });
    }
  });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3005, () => console.log("server is listening on post 3005"));
