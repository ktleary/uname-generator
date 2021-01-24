const beautifulConsonants = "bcdfghjklmnprstyw";
const vowels = "aeiou";
const all = beautifulConsonants.concat(vowels);

// randomChar :: String -> String
const randomChar = (string) =>
  string[Math.floor(Math.random() * string.length)];

// generateUname :: Number -> String
function generateUname(length = 8) {
  if (length < 4) return false;
  // switch character choice by letter position
  return Array(length)
    .fill(0)
    .reduce((result, _, idx) => {
      if (idx === 0) {
        return result.concat(randomChar(all));
      } else if (idx === 1 || idx === 2) {
        return result.concat(randomChar(beautifulConsonants));
      } else if (idx === 3) {
        return result.concat(randomChar(vowels));
      } else if (idx % 2 !== 0) {
        return result.concat(randomChar(vowels));
      }
      return result.concat(randomChar(all));
    }, "");
}

function main() {
  const writeUname = (uname) => console.log(uname);
  const unameLength = 8;
  const uname = generateUname(unameLength);
  return writeUname(uname);
}

/* eslint-disable fp/no-unused-expression */
main();

module.exports = generateUname;
