const Box = require('../common/Box')

const join = m =>
  m.chain(x => x)

const m = Box('wonder')
const res1 = join(Box.of(m))
const res2 = join(m.map(Box.of))

console.log(res1, res2)
