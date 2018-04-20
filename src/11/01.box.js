const Box = x => ({
  fold: f => f(x),
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
})

const LazyBox = g => ({
  fold: f =>
    f(g()),
  map: f =>
    LazyBox(() =>
      f(g()))
})

const result = LazyBox(() =>
  '  64 ') // breakpoint
  .map(abba =>
    abba.trim()) // breakpoint
  .map(trimmed =>
    Number(trimmed)) // breakpoint
  .map(number =>
    number + 1) // breakpoint
  .map(x =>
    String.fromCharCode(x)) // breakpoint
  .fold(x =>
    x.toLowerCase()) // breakpoint

console.log(result)
