const { Map } = require('immutable-ext')
const { Sum } = require('../monoid')

const res = Map({ brian: Sum(3), sara: Sum(5) })
  .map(Sum)
  .fold(Sum.empty())

console.log(res)
