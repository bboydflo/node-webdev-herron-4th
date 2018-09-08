const fs = require('fs')
const util = require('util')
const fs_readdir = util.promisify(fs.readdir)

let dir = process.argv[2] ? process.argv[2] : '.'

fs_readdir(dir)
  .then(files => {
    for (let fn of files) {
      console.log(fn)
    }
  })
  .catch(err => {
    console.error(err)
  })

// to be called like: node 2-ls2.js