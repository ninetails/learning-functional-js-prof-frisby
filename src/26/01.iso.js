const Either = require('../common/Either')
const { Right, Left } = Either

const Iso = (to, from) => ({ to, from })

// const chars = Iso(s => s.split(''), c => c.join(''))

// const res = chars.from(chars.to('hello world'))
// console.log(res)

// const truncate = str =>
//   chars.from(chars.to(str).slice(0, 3)).concat('...')

// const res = truncate('hello world')
// console.log(res)

// [a] ~ Either null a
const singleton = Iso(e => e.fold(() => [], x => [x]), ([x]) => x ? Right(x) : Left())

const filterEither = (e, pred) =>
  singleton.from(singleton.to(e).filter(pred))

// const res = filterEither(Right('hello'), x => x.match(/h/ig))
//   .map(x => x.toUpperCase())
// // => Right(HELLO)

const res = filterEither(Right('ello'), x => x.match(/h/ig))
  .map(x => x.toUpperCase())
// // => Left(undefined)

console.log(res)
