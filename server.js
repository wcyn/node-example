var http = require('http');
http.createServer(function (reg, res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello World You!!\n')
}).listen(1337);
console.log('Server running!')