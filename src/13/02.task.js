const fs = require('fs')
const { join } = require('path')
const { curry, replace } = require('ramda')
const { task } = require('folktale/concurrency/task')

const currentPath = curry((curr, filename) => join(curr, filename))(__dirname)

const readFile = (filename, enc) =>
  task(({ resolve, reject }) =>
    fs.readFile(currentPath(filename), enc, (err, contents) =>
      err ? reject(err) : resolve(contents)))

const writeFile = (filename, contents) =>
  task(({ resolve, reject }) =>
    fs.writeFile(currentPath(filename), contents, (err, success) =>
      err ? reject(err) : resolve(success)))

readFile('config.json', 'utf-8')
  .map(replace(/8/g, '6'))
  .chain(contents => writeFile('config1.json', contents))
  .run()
  .listen({
    onRejected: console.log.bind(console),
    onResolved: () => console.log('success')
  })
