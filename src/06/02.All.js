const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`
})

const res = All(true).concat(All(false))
console.log(res)

console.log(All(true).concat(All(true)))
