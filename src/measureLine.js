// Measure the indentation of a given line.
const thru = require('thru')

module.exports = function measureLineConfig ({spaceValue, tabValue}) {
  return function measureLine () {
    return thru(function(obj, cb) {
      // I think this is efficient.
      const body = obj.body
      // For loop safer than while loop.
      let measurement = 0
      for (var i = 0; i < body.length; i++) {
        if (body[i] === ' '.codePointAt(0)) {
          measurement += spaceValue
        } else if (body[i] === '\t'.codePointAt(0)) {
          measurement += tabValue
        } else {
          break
        }
      }
      // TODO: Don't mutate stuff
      obj.indentLevel = measurement
      cb(null, obj)
    })
  }
}