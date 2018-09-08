const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.end('Hello world!')
}).listen(8124, 'localhost', () => {
  console.log('server is now listening...')
})