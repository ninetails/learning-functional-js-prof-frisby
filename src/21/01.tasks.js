const Task = require('data.task')

const Db = {
  find: id =>
    new Task((reject, resolve) =>
      setTimeout(() => {
        console.log(`evaluating ${id}`)
        resolve({ id: id, title: `Project ${id}` })
      }, 3000))
}

const reportHeader = (p1, p2) =>
  `Report: ${p1.title} compared to ${p2.title}`

// initial
console.time('serial')
Db.find(20).chain(p1 =>
  Db.find(8).map(p2 =>
    reportHeader(p1, p2)))
  .fork(console.error.bind(console), data => {
    console.timeEnd('serial')
    console.log(data)
  })

// fp
console.time('fp')
Task.of(p1 => p2 => reportHeader(p1, p2))
  .ap(Db.find(20))
  .ap(Db.find(8))
  .fork(console.error.bind(console), data => {
    console.log(data)
    console.timeEnd('fp')
  })
