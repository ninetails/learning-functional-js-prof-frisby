const Box = require('../common/Box')

const join = m =>
  m.chain(x => x)

const m = Box(Box(Box(3)))
const res1 = join(m.map(join))
const res2 = join(join(m))

console.log(res1, res2)
