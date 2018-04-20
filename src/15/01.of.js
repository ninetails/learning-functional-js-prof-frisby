const Box = require('../common/Box')
const Either = require('../common/Either')
const Task = require('folktale/concurrency/task')

console.log(Task.of('hello')) // Task('hello')
console.log(Either.of('hello')) // Right('hello')
console.log(Box.of(100)) // Box(100)
