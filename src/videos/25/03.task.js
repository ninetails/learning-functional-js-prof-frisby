const Task = require('data.task')
const { Right, Left } = require('../common/Either')

const fake = id =>
  ({ id, name: `user${id}`, best_friend_id: id + 1 })

const Db = {
  find: id =>
    new Task((rej, res) =>
      res(id > 2 ? Right(fake(id)) : Left('not found')))
}

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

// Db.find(3) // Task(Right(user))
//   .chain(either =>
//     either.map(user => Db.find(user.best_friend_id))) // Right(Task(Right(User)))

Db.find(3) // Task(Right(user))
  .chain(eitherToTask)
  .chain(user =>
    Db.find(user.best_friend_id))
  .chain(eitherToTask)
  .fork(console.error.bind(console), console.log.bind(console))
