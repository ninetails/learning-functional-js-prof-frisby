const Box = require('../common/Box')

const id = x => x

const res1 = Box('crayons').map(id)

const res2 = id(Box('crayons'))

console.log(res1, res2)
