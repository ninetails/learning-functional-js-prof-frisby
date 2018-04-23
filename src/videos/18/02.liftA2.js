const Box = require('../common/Box')
const add = x => y => x + y

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)

const res = liftA2(add, Box(2), Box(4))

console.log(res)
console.log(Box(add).ap(Box(2)).ap(Box(4))) // what we pretended to do
console.log(Box(2).map(add).ap(Box(4))) // what is being done
console.log(add(2)(4)) // same of but without Functor
