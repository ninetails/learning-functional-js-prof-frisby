const Right = x => ({
  isRight: true,
  isLeft: false,
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
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

module.exports = Either
