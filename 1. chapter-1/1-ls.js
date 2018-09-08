const fs = require('fs')
const util = require('util')
const fs_readdir = util.promisify(fs.readdir)

fs_readdir('.')
  .then(files => {
    for (let fn of files) {
      console.log(fn)
    }
  })
  .catch(err => {
    console.error(err)
  })