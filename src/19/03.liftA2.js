const Either = require('../common/Either')

const liftA2 = (f, fx, fy) =>
  fx.map(f).ap(fy)

const $ = selector =>
  Either.of({ selector, height: 10 })

const getScreenSize = screen => head => foot =>
  screen - (head.height + foot.height)

const res = liftA2(getScreenSize(800), $('header'), $('footer'))

console.log(res)
