const Sum = x => ({
  x,
  concat: ({ x: y }) => Sum(x + y),
  inspect: () => `Sum(${x})`
})

const res = Sum(1).concat(Sum(2))
console.log(res)
