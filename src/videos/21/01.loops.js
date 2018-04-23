const { of, task } = require('folktale/concurrency/task')

const Db = {
  find: id =>
    task(({ resolve }) =>
      setTimeout(() => {
        console.log(`Back from ${id}`)
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
  .run()
  .listen({
    onRejected: console.error.bind(console),
    onResolved: data => {
      console.timeEnd('serial')
      console.log(data)
    }
  })

// fp
console.log('No parallel anymore for .ap :(\n@see http://folktale.origamitower.com/docs/v2.1.0/migrating/from-data.task/#taskap')
console.time('fp')
of(p1 => p2 => reportHeader(p1, p2))
  .ap(Db.find(20))
  .ap(Db.find(8))
  .run()
  .listen({
    onRejected: console.error.bind(console),
    onResolved: data => {
      console.timeEnd('fp')
      console.log(data)
    }
  })
