const { task } = require('folktale/concurrency/task')

const launchMissiles = () =>
  task(({ resolve }) => {
    console.log('launch missiles!')
    resolve('missile')
  })

launchMissiles()
  .map(x => x + '!')
  .run()
  .listen({
    onRejected: err => console.error('err', err),
    onResolved: x => console.log('success', x)
  })
