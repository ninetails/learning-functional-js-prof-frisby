const { List } = require('immutable-ext')

// constructor as a natural transformation
const res = List(['hello', 'world'])
  .chain(x => List(x.split('')))

console.log(res)
