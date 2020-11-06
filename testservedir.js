//
// # testservedir.js
//
// # SETUP
// Should work with a base install of nodejs
//
// # RUN
// `node testservedir.js`
//
// The purpose here is to provide an example "Local Development Server" (e.g. something Pulsar can talk to that serves
// content from http://127.0.0.1:3002)
//
// Please see the "Local Development Server" section on the wiki : https://luminix.atlassian.net/wiki/spaces/PD/overview
//
// This script serves various files from the local directory it's running in.
//

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {

    const url = new URL(request.url, `http://${request.headers.host}`);
    const searchArgs = url.search;
    let filePath = '.' + url.pathname;
    if (filePath == './' || filePath == '.') {
        filePath = './index.html'; // NOTE: The `.pulsarapp` format expects a toplevel `index.html` as the entrypoint to your HTML/JS Pulsar App
    }
    else if (filePath.match('./local/Docs-')) {
        // Pulsar on Windows will expose extra documents to this local path ...
        filePath = filePath.replace(/local\/Docs-[^\/]*\//, '');
    }

    console.log('request starting for: ' + filePath + ' ' + searchArgs);

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.gif':
            contentType = 'image/gif';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.ttf':
            contentType = 'font/ttf';
            break;
        case '.woff':
            contentType = 'font/woff';
            break;
        case '.woff2':
            contentType = 'font/woff2';
            break;
    }

    if (!fs.existsSync(filePath)) {
        console.log('\tError  loading: ' + filePath);
        response.writeHead(404);
        response.end('Four-oh-four on ' + filePath);
        return;
    }

    const stat = fs.statSync(filePath);
    fs.readFile(filePath, function(error, content) {
        if (error) {
            console.log('\tError ' +  error.code + ' loading: ' + filePath);
            response.writeHead(500);
            response.end('OOPS error: ' + error.code + ' ..\n');
        }
        else {
            response.writeHead(200, {
                'Content-Length': stat.size,
                'Content-Type': contentType
            });
            response.end(content, 'utf-8');
        }
    });

}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/');
