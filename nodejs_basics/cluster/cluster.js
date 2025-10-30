const cluster = require("cluster");
const http = require("node:http");
const os = require("os");

const totalCpus = os.cpus().length;

if (cluster.isMaster) {
  console.log(`master is running on pid ${process.pid}`);
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
//   console.log(`worker is runnning on pid ${process.pid}`);
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
}
