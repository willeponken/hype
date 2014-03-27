var http = require('http');
var server;

function onRequest(req, res) {
  console.log(req.method, req.url);
  console.log('sum hype is on');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('such cjdns\n\n                       such illegal\n\n      such hype\n\n           such ipv6 ' + req.connection.remoteAddress);
}

function onListening() {
  console.log(this.name + ': Hype is listening...');
}

ipv4srv = http.createServer();
ipv6srv = http.createServer();

ipv4srv.name = 'ipv4srv';
ipv4srv.on('request', onRequest);
ipv4srv.on('listening', onListening);
ipv4srv.listen(1337, '127.0.0.1');

ipv6srv.name = 'ipv6srv';
ipv6srv.on('request', onRequest);
ipv6srv.on('listening', onListening);
ipv6srv.listen(80, 'fc74:73e8:3913:f15b:d463:2fe7:db69:381e');
