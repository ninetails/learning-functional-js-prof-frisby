const Box = require('../common/Box')

// const res = Box(x => x + 1).ap(Box(2)) // => Box(3)

// const res = Box(x => y => x + y).ap(Box(2)) // => Box(y => 2 + y)
const add = x => y => x + y
const res = Box(add).ap(Box(2)).ap(Box(3)) // => Box(5)

console.log(res)
