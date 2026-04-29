const http = require('http');
const client = require('prom-client');

client.collectDefaultMetrics();

const requestCount = new client.Counter({
  name: 'app_requests_total',
  help: 'Total number of requests'
});

const server = http.createServer(async (req, res) => {
  if (req.url === '/metrics') {
    res.setHeader('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
  } else {
    requestCount.inc();
    res.end("Hello from DevOps App 🚀");
  }
});

server.listen(3000);
