// Import the http module
const http = require('http');

// The request handler function
const requestHandler = (request, response) => {
  console.log("Received request from", request.url);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello, World!\n');
};

// Create the server using the request handler
const server = http.createServer(requestHandler);

// Define a port
const port = 3000;

// Start the server
server.listen(port, (err) => {
  if (err) {
    return console.log('Something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});
