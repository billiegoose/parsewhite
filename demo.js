require('pretty-error').start()
const miss = require('mississippi')
const thru = require('thru')
const watchFolder = require('./src/watchFolder')()
const readFileTransform = require('./src/readFileTransform')()
const codePointsTransform = require('./src/codePointsTransform')()
const splitByDelimiterTransform = require('./src/splitByDelimiterTransform')({eol: '\n'})

// My version is significantly faster than the 'stdout' module.
const log = require('./src/fast-log')
function stdout () {
  return thru(function (obj, cb) {
    log(obj)
    cb()
  })
}

// Test.
watchFolder('.').pipe(readFileTransform()).pipe(thru((obj, cb) => {
  // console.log('obj =', obj)
  obj.stream.pipe(codePointsTransform()).pipe(splitByDelimiterTransform()).pipe(stdout())
  cb()
}))
