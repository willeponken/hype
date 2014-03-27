var http = require('http')
  , server = http.createServer()

  /* User specific variables
   * If the port is lower than or equal to 1024; run as root. */
  , NAME = 'Hype'
  , PORT = 81
  , ADDRESS = 'fc74:73e8:3913:f15b:d463:2fe7:db69:381e';

function onRequest(req, res) {
  console.log(req.method, req.url);
  console.log(this.name + ': got request.');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('such cjdns\n\n                       such illegal\n\n      such hype\n\n           such ipv6 ' + req.connection.remoteAddress);
}

function onListening() {
  console.log(this.name + ': Listening on ' + ADDRESS + ':' + PORT);
  console.log(this.name + ': Press CTRL+C to terminate');
}

server.name = NAME;
server.on('request', onRequest);
server.on('listening', onListening);
server.listen(PORT, ADDRESS);
