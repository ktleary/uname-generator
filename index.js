const beautifulConsonants = 'bcdfghjklmnprst'
const vowels = 'aeiou'
const all = beautifulConsonants.concat(vowels)

const randomChar = string => string[Math.floor(Math.random() * string.length)]

function generateUname(length = 8) {
  if (length < 4) return false
  return new Array(length).fill(null).reduce((result, _, idx) => {
    /* eslint-disable no-param-reassign */
    if (idx === 0) {
      result = randomChar(all)
    } else if (idx === 1 || idx === 2) {
      result += randomChar(beautifulConsonants)
    } else if (idx === 3) {
      result += randomChar(vowels)
    } else if (idx % 2 !== 0) {
      result += randomChar(vowels)
    } else {
      result += randomChar(all)
    }
    return result
  }, '')
}

function main() {
  const unameLength = 6
  const unname = generateUname(unameLength)
  process.stdout.write(unname.toString())
}

main()

module.exports = generateUname
