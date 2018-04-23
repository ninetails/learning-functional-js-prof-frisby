const { List } = require('immutable-ext')

const Right = x => ({
  isLeft: false,
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  isLeft: true,
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const First = either => ({
  fold: f => f(either),
  concat: o => either.isLeft ? o : First(either),
  inspect: () => `First(${either})`
})

First.empty = () => First(Left())

const find = (xs, f) =>
  List(xs)
    .foldMap(x =>
      First(f(x) ? Right(x) : Left()), First.empty())
    .fold(x => x)

const res = find([3, 4, 5, 6, 7], x => x > 4)
console.log(res)
