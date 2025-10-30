const http = require("node:http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Home page");
  } else if (req.url === "/slow-page") {
    for (let i = 0; i < 6000000000; i++) {}
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Slow page");
  }
});

const PORT = 3004;

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
