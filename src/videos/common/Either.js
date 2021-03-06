const Box = require('./Box')

const Right = x => Object.assign({}, Box(x), {
  isRight: true,
  isLeft: false,
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => Object.assign({}, Box(x), {
  isRight: false,
  isLeft: true,
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const Either = {
  Right,
  Left,
  fromNullable
}

Right.of = x => Right(x)
Left.of = x => Left(x)
Either.of = Right.of

module.exports = Either
