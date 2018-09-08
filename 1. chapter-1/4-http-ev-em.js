const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello world!')
})
server.listen(8124, 'localhost')
console.log('server is listening for connections at localhost:8124/')