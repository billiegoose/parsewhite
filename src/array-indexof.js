const startsWith = require('./array-startswith')

module.exports = indexOf
function indexOf (body, search, fromIndex) {
  if (search.length > body.length) return -1
  const max_n = body.length - search.length + 1
  // Use native Array.indexOf for the first character, then
  // manually compare the rest
  let i = fromIndex || 0
  for (let n = 0; n < max_n; n++) {
    i = body.indexOf(search[0], i)
    if (i > -1) {
      if (startsWith(body.slice(i), search)) return i
      i++
    } else {
      return -1
    }
  }
}