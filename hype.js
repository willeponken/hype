/*
 * Just a silly little webserver to check our connection to
 * the peers on cjdns.
 * /
  
  var http = require('http')
  , server = http.createServer()

  /* User specific variables
   * If the port is lower than or equal to 1024; run as root. */
  , NAME = 'Hype'
  , PORT = 80
  , ADDRESS = 'fc74:73e8:3913:f15b:d463:2fe7:db69:381e';

function onRequest(req, res) {
  console.log(req.method, req.url);
  console.log(this.name + ': Request from ' + req.connection.remoteAddress);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome ' + req.connection.remoteAddress + '.');
}

function onListening() {
  console.log(this.name + ': Listening on http://[' + ADDRESS + ']:' + PORT + '/');
  console.log(this.name + ': Press CTRL+C to terminate');
}

function startServer(name, address, port) {
  server.name = '\x1B[34m' + name + '\x1B[00m';
  server.on('request', onRequest);
  server.on('listening', onListening);
  server.listen(port, address);
  return server;
}

// Initialize and listen
startServer(NAME, ADDRESS, PORT);
