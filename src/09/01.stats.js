const { List } = require('immutable-ext')

const Right = x => ({
  fold: (f, g) => g(x),
  map: f => Right(f(x)),
  concat: o => o.fold(e => Left(e), r => Right(x.concat(r))),
  inspect: () => `Right(${x.inspect ? x.inspect() : x})`
})

const Left = x => ({
  fold: (f, g) => f(x),
  map: f => Left(x),
  concat: o => Left(x),
  inspect: () => `Left(${x.inspect ? x.inspect() : x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x.inspect ? x.inspect() : x})`
})

const stats = List.of(
  { page: 'Home', views: 40 },
  { page: 'About', views: 10 },
  { page: 'Blog', views: 4 }
)

const res = stats.foldMap(x => fromNullable(x.views).map(Sum), Right(Sum(0)))
console.log(res)
