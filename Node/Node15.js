//Setting up an HTTP server
const http = require('http');


//Create the Server
const server = http.createServer((req, res) => {
    // Request handling logic goes here
  });

//Listening for requests
  server.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });

///Handling HTTP requests
  //Parse Request Data:
  const url = require('url');

// Inside the request handler
const parsedUrl = url.parse(req.url, true);
const path = parsedUrl.pathname;
const query = parsedUrl.query;

//Implement Request Handlers 
if (path === '/users') {
    // Handle the '/users' endpoint
  } else if (path === '/products') {
    // Handle the '/products' endpoint
  } else {
    // Handle unknown endpoints
  }

//Send Responses
  // Inside the "/products" endpoint handler
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('I am a list of products :p');


