const { of, task } = require('folktale/concurrency/task')

const Db = {
  find: id =>
    task(({ resolve }) =>
      setTimeout(() => {
        console.log(`Back from ${id}`)
        resolve({ id: id, title: `Project ${id}` })
      }, 1000))
}

const reportHeader = (p1, p2) =>
  `Report: ${p1.title} compared to ${p2.title}`

// initial
Db.find(20).chain(p1 =>
  Db.find(8).map(p2 =>
    reportHeader(p1, p2)))
  .run()
  .listen({
    onRejected: console.error.bind(console),
    onResolved: console.log.bind(console)
  })

// fp
of(p1 => p2 => reportHeader(p1, p2))
  .ap(Db.find(20))
  .ap(Db.find(8))
  .run()
  .listen({
    onRejected: console.error.bind(console),
    onResolved: console.log.bind(console)
  })
