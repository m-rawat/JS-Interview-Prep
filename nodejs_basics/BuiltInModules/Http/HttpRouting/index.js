const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3004, () => {
  console.log("Server is listening on 3004");
});
