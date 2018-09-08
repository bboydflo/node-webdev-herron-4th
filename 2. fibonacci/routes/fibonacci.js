const express = require('express')
const router = express.Router()

const math = require('../math')

router.get('/', (req, res, next) => {
  if(req.query.fibonum && Number.isInteger(parseInt(req.query.fibonum, 10))) {
    res.render('fibonacci', {
      title: 'Calculate fibonacci numbers',
      fibonum: req.query.fibonum,
      fiboval: math.fibonacci(req.query.fibonum)
    })
  } else {
    res.render('fibonacci', {
      title: 'Calculate fibonacci numbers',
      fiboval: undefined
    })
  }
})

module.exports = router