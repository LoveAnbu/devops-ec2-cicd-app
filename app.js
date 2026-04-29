const http = require('http');
http.createServer((req, res) => {
  res.end("Hello from EC2 DevOps Project 🚀");
}).listen(3000);
