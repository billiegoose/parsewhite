const thru = require('thru')

// body is of type Buffer
string2unicodearray = (str) => Array.from(str.normalize())
unicodearray2intarray = (arr) => arr.map(x => x.codePointAt(0))

function codePointsTransformConfig (opts) {
  return function codePointsTransform () {
    return thru((buffer, cb) => {
      const arr = string2unicodearray(buffer.toString('utf8'))
      const iarr = unicodearray2intarray(arr)
      cb(null, iarr)
    })
  }
}

module.exports = codePointsTransformConfig
