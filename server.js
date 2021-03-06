var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('key.pem', 'utf8');
var certificate = fs.readFileSync('cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();

// your express configuration here
app.get('/', function(req, res) {
    res.sendFile('LongSlapbackDevice3.htm', {root: __dirname })
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
