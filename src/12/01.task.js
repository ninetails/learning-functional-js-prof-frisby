const { of, rejected } = require('folktale/concurrency/task')

console.log('# of(1):')
of(1) // Task(1)
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# rejected(1):')
rejected(1)
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# of(1) + map:')
of(1)
  .map(x => x + 1)
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# rejected(1) + map:')
rejected(1) // Left(1)
  .map(x => x + 1)
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# chain:')
of(1)
  .map(x => x + 1)
  .chain(x => of(x + 1))
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# chain + rejected:')
rejected(1)
  .map(x => x + 1)
  .chain(x => of(x + 1))
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })

console.log('\n# chain + rejected after:')
of(1)
  .map(x => x + 1)
  .chain(x => rejected(x + 1)) // 3, but...
  .map(x => x + 1) // not running
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })
