const http = require('http')

const apiPaths = [
  "/fibonacci/30", "/fibonacci/20", "/fibonacci/10",
  "/fibonacci/9", "/fibonacci/8", "/fibonacci/7",
  "/fibonacci/6", "/fibonacci/5", "/fibonacci/4",
  "/fibonacci/3", "/fibonacci/2", "/fibonacci/1"
]

apiPaths.forEach(path => {
  console.log(`${new Date().toISOString()} requesting ${path}`)
  var req = http.request({
    host: "localhost",
    port: process.env.SERVERPORT || 3001,
    path: path,
    method: 'GET'
  }, res => {
    res.on('data', chunk => {
      console.log(`${new Date().toISOString()} BODY: ${chunk}`)
    })
  })
  req.end()
})