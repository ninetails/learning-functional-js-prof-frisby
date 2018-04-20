const Either = require('../common/Either')

const $ = selector =>
  Either.of({ selector, height: 10 })

const getScreenSize = (screen, head, foot) =>
  screen - (head.height + foot.height)

const res = $('header').chain(head =>
  $('footer').map(footer =>
    getScreenSize(800, head, footer)))

console.log(res)
