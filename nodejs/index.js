const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<h1>Hello from Node.js in Docker!</h1>');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server running on port 8080');
