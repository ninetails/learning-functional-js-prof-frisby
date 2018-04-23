const { fromNullable } = require('../common/Either')

const first = xs =>
  fromNullable(xs[0])

const largeNumbers = xs =>
  xs.filter(x => x > 100)

const larger = x =>
  x * 2

const app = xs =>
//   first(largeNumbers(xs).map(larger))
  first(largeNumbers(xs)).map(larger)

console.log(app([2, 400, 5, 1000]))
