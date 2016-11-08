const http = require("http");
const PORT = 8080;

function requestHandler(request, response) {
  response.end(`Requested Path: ${request.url}\nRequest Method: ${request.method}`)
}

var server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
});

function requestHandler(request, response) {
  if (request.url == "/") {
    response.end("Welcome!");
  } else if (request.url == "/urls") {
    response.end("www.plentyofcats.ca\nwww.google.ca/#q=cats")
  } else {
    response.statusCode = 404;
    response.end("Unknown Path");
  }
}
