const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  //   res.end("Hello World");

  // const data = {
  //   name: "Mayank",
  // };

  // res.writeHead(200, { "Content-Type": "application/json" });
  // res.end(JSON.stringify(data));

  // const htmlData = fs.readFileSync(__dirname + "/index.html", "utf-8");

  // res.writeHead(200, { "Content-Type": "text/html" });
  // res.end(htmlData);

  const name = "Mayank";
  let htmlData = fs.readFileSync(__dirname + "/index.html", "utf-8");
  htmlData = htmlData.replace("{{name}}", name);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlData);
});

server.listen(3003, () => {
  console.log("server is listening on port 3003");
});
