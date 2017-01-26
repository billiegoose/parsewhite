'use strict'
const indexOf = require('./array-indexof')
const thru = require('thru')
const s2i = require('./s2i')

// Given a chunk of text, return an array of smaller chunks of text
module.exports = function parseLineEndingsConfig ({eol}) {
  const sep = s2i(eol)
  const seplen = sep.length
  return function parseLineEndings () {
    return thru(function (iarr, cb) {
      let i = 0
      let last = 0
      for (let n = 0; n < iarr.length; n++) {
        i = indexOf(iarr, sep, last)
        if (i > -1) {
          this.push(iarr.slice(last, i))
          last = i + seplen
        } else {
          break
        }
      }
      // ATTENTION: For now, we will assume that only lines that end with a newline
      // matter, and that chunks will end on a nice note. Later we may need to add
      // concatenating chunks that are split over newlines.
      cb()
    })
  }
}
