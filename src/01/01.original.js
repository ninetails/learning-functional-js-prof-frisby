const nextCharForNumberString = str => {
  const trimmed = str.trim()
  const number = parseInt(trimmed, 10)
  const nextNumber = number + 1
  return String.fromCharCode(nextNumber)
}

const result = nextCharForNumberString('  64 ')

console.log(result)
