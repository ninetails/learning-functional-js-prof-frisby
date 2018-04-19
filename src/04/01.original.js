const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const { readFileSync } = require('fs')
const { join } = require('path')

const getPort = () => {
  try {
    const str = readFileSync(join(__dirname, 'config.json'))
    const config = JSON.parse(str)
    return config.port
  } catch (e) {
    return 3000
  }
}

const result = getPort()

console.log(result)
