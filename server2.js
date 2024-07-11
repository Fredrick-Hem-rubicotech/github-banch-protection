// Import the http module
const http = require('http');

// Define the hostname and port where the server will listen
const hostname = '127.0.0.1';
const port = 4000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body "Hello World"
  res.end('Helo World\n');
});

// Make the server listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server is running in http://${hostname}:${port}/`);
});
