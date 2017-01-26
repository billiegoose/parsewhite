const startsWith = require('./array-startswith')

module.exports = indexOf
function indexOf (body, search, fromIndex) {
  if (search.length > body.length) return -1
  const max_i = body.length - search.length + 1
  for (var i = fromIndex || 0; i < max_i; i++) {
    if (startsWith(body.slice(i), search)) return i
  }
  return -1
}