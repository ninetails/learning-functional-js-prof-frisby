const { compose } = require('ramda')

const All = x => ({
  x,
  concat: ({ x: y }) => All(x && y),
  inspect: () => `All(${x})`
})

const Fn = f => ({
  fold: f,
  concat: o =>
    Fn(x => f(x).concat(o.fold(x)))
})

const hasVowels = x => !!x.match(/[aeiou]/ig)
const longWord = x => x.length >= 5

const both = Fn(compose(All, hasVowels))
  .concat(Fn(compose(All, longWord)))

const res = ['gym', 'bird', 'lilac']
  .filter(x => both.fold(x).x)

// x => both.fold(x).x
// x => Fn( All(hasVowels(x)) ).concat( Fn(All(longWord(x))) ).fold(x).x
// x => Fn( All(hasVowels(x)).concat( Fn(All(longWord(x))).fold(x) ) ).fold(x).x
// x => Fn( All(hasVowels(x)).concat(All(longWord(x))) ).fold(x).x
// x => All(hasVowels(x) && longWord(x))).x

console.log(res)

console.log(['gym', 'bird', 'lilac']
  .filter(x => hasVowels(x) && longWord(x)))
