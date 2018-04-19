const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
})

Sum.empty = () => Sum(0)

// console.log(Sum.empty().concat(Sum(1).concat(Sum(2))))
// console.log(Sum(1).concat(Sum(2)))

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`
})

All.empty = () => All(true)
