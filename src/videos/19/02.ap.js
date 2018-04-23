const Either = require('../common/Either')

const $ = selector =>
  Either.of({ selector, height: 10 })

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height)

const res = Either.of(getScreenSize(800))
  .ap($('header'))
  .ap($('footer'))

console.log(res)
