const string2unicodearray = (str) => Array.from(str.normalize())
const unicodearray2intarray = (arr) => arr.map(x => x.codePointAt(0))

module.exports = (str) => {
  return unicodearray2intarray(string2unicodearray(str))
}