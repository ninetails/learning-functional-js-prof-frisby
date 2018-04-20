const add = x => y => x + y

const inc = add(1)

const modulo = dvr => dvd => dvd % dvr

const isOdd = modulo(2)

const filter = pred => xs => xs.filter(pred)

const map = f => xs => xs.map(f)

const getAllOdds = filter(isOdd)

const replace = regex => repl => str =>
  str.replace(regex, repl)

const censor = replace(/[aeiou]/ig)('*')

const censorAll = map(censor)

console.log(inc(2))
console.log(isOdd(21))
console.log(getAllOdds([1, 2, 3, 4]))
console.log(censor('hello world'))
console.log(censorAll(['hello', 'world']))
