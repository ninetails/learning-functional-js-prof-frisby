const { readFile, writeFile } = require('fs')
const { join } = require('path')

const app = () =>
  readFile(join(__dirname, 'config.json'), 'utf-8', (err, contents) => {
    if (err) throw err

    const newContents = contents.replace(/8/g, '6')

    writeFile(join(__dirname, 'config1.json'), newContents, (err, _) => {
      if (err) throw err
      console.log('success!')
    })
  })

app()
