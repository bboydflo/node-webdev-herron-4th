const express = require('express')
const router = express.Router()

const math = require('../math')

router.get('/', (req, res, next) => {
  if(req.query.fibonum && Number.isInteger(parseInt(req.query.fibonum, 10))) {
    math.fibonacciAsync(req.query.fibonum, (err, fiboval) => {
      res.render('fibonacci', {
        title: 'Calculate fibonacci numbers',
        fibonum: req.query.fibonum,
        fiboval
      })
      next()
    })
  } else {
    res.render('fibonacci', {
      title: 'Calculate fibonacci numbers',
      fiboval: undefined
    })
  }
})

module.exports = router