const math = require('./math')
const util = require('util')

/* for (var num=0; num<45; num++) {
  let now = new Date().toISOString();
  // console.log(`${now} Fibonacci for ${num} = ${math.fibonacci(num)}`)
  console.log(`${now} Fibonacci for ${num} = ${math.fibonacciLoop(num)}`)
} */

for (var num=0; num<80; num++) {
  // console.log(`${now} Fibonacci for ${num} = ${math.fibonacci(num)}`)
  ((n) => {
    math.fibonacciAsync(n, (err, result) => {
      let now = new Date().toISOString();
      console.log(`${now} Fibonacci for ${n} = ${result}`)
    })
  })(num)
}