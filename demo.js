require('pretty-error').start()
const miss = require('mississippi')
const stdout = require('stdout') // because process.stdout wont accept object streams
const thru = require('thru')
const watchFolder = require('./src/watchFolder')()
const readFileTransform = require('./src/readFileTransform')()
const codePointsTransform = require('./src/codePointsTransform')()
const splitByDelimiterTransform = require('./src/splitByDelimiterTransform')({eol: '\n'})

// Test.
watchFolder('.').pipe(readFileTransform()).pipe(thru((obj, cb) => {
  console.log('obj =', obj)
  obj.stream.pipe(codePointsTransform()).pipe(splitByDelimiterTransform()).pipe(stdout())
  cb()
}))
