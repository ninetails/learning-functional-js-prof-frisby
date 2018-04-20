const { List } = require('immutable-ext')
const { Sum } = require('../monoid')

// const res = [Sum(1), Sum(2), Sum(3)]
//   .reduce((acc, x) => acc.concat(x), Sum.empty())

const res = List.of(Sum(1), Sum(2), Sum(3))
  .fold(Sum.empty())

console.log(res)
