//
// # testserve.js
//
// # SETUP
// Should work with a base install of nodejs/npm
//
// # RUN
// `node testserve.js`
//
// The purpose here is to provide an example "Local Development Server" (e.g. something Pulsar can talk to that serves
// content from http://127.0.0.1:3002)
//
// Please see the "Local Development Server" section on the wiki : https://luminix.atlassian.net/wiki/spaces/PD/overview
//

var http = require('http');
var path = require('path');
var fs = require('fs');

http.createServer(function (req, res) {
    console.log('request starting...');

    var filePath = path.join(__dirname, 'hello.html');
    var stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    var readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/');
