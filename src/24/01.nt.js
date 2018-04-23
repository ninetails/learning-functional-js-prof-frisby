const Task = require('data.task')
const Either = require('../common/Either')
const { Right, Left, fromNullable } = Either
const Box = require('../common/Box')

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

eitherToTask(Right('nightingale'))
  .fork(e => console.error('err', e), r => console.log('res', r))
// //=> res nightingale

eitherToTask(Left('errrrrr'))
  .fork(e => console.error('err', e), r => console.log('res', r))
// //=> err errrrrr

const boxToEither = b =>
  b.fold(x => Right(x))

const res = boxToEither(Box(100))
console.log(res) // Right(100)

// nt(x).map(f) => nt(x.map(f))
const res1 = boxToEither(Box(100)).map(x => x * 2)
const res2 = boxToEither(Box(100).map(x => x * 2))
console.log(res1, res2)

const first = xs =>
  fromNullable(xs[0])

const res3 = first([1, 2, 3]).map(x => x + 1)
const res4 = first([1, 2, 3].map(x => x + 1))
console.log(res3, res4)
