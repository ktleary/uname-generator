const {
  addIndex,
  compose,
  concat,
  dec,
  equals,
  length,
  lt,
  modulo,
  or,
  range,
  reduce,
} = require("ramda");
const { Random } = require("random-js");
const random = new Random();

const beautifulConsonants = "bcdfghjklmnprstyw";
const vowels = "aeiou";

// -- Util -------------

const decStrLen = compose(dec, length);
const lt2OrEven = (x) => or(lt(x, 2), equals(modulo(x, 2), 0));
const selLetterList = (pos) => (lt2OrEven(pos) ? beautifulConsonants : vowels);
const randomChar = (str) => str[random.integer(0, decStrLen(str))];
const selRndmChar = compose(randomChar, selLetterList);

// unameReducer :: (String, Number) -> String
const unameReducer = (uname, idx) => concat(uname, selRndmChar(idx));

// generateUname = (Number) -> String
const generateUname = (length) => reduce(unameReducer, "", range(0, length));

function main() {
  const writeUname = (uname) => console.log(uname);
  const unameLength = 7;
  const uname = generateUname(unameLength);
  return writeUname(uname);
}

/* eslint-disable fp/no-unused-expression */
main();

module.exports = generateUname;
