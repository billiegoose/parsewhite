// Measure the indentation of a given line.
// Let's just say spaces count as 1 and tabs count as n.
module.exports = function measureLineConfig ({spaceValue, tabValue}) {
  return function measureLine ({body}) {
    // I think this is efficient.
    // For loop safer than while loop.
    let measurement = 0
    for (var i = 0; i < body.length; i++) {
      if (body[i] === ' ') {
        measurement += spaceValue
      } else if (body[i] === '\t') {
        measurement += tabValue
      } else {
        break
      }
    }
    return {body, indentLevel: measurement}
  }
}