const fs = require('fs')
const { join } = require('path')
const Task = require('data.task')
const futurize = require('futurize').futurize(Task)
const { List } = require('immutable-ext')

const readFile = futurize(fs.readFile)

const files = List(['../common/Box.js', 'config.json'])
  .map(f => join(__dirname, f))

// const res = files
//   .map(fn => readFile(fn, 'utf-8')) // [Task, Task]
// console.log(res)

files
  .traverse(Task.of, fn => readFile(fn, 'utf-8')) // Task[]
  .fork(console.error, console.log)
