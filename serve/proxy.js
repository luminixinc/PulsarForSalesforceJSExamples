//
// # proxy.js
//
// NOTE: Change the host IP to match yours, or FIX THE SCRIPT to read an argument ;)
//
// # SETUP
// `npm install http-proxy`
//
// # RUN
// `node proxy.js`
//
// The purpose here is to route calls to the JSAPI local development server (http://127.0.0.1:3002) to some other location.
//
// For example, if you have a Win10 running in Virtualbox on a macOS host, but prefer to do your HTML/JS development on
// the host, this is for you!
//

var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});

http.createServer(function(req, res) {
    proxy.web(req, res, {
        target: {
            host: '10.0.1.5', // CHANGE this to the host IP
            port: 3002,
        },
    });
}).listen(3002);

console.log('Proxy server running at http://127.0.0.1:3002/');

