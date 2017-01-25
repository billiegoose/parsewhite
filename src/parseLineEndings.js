'use strict'
// Given a chunk of text, return an array of smaller chunks of text
module.exports = function parseLineEndingsConfig ({eol}) {
  return function parseLineEndings ({body}) {
    // TODO: implement parser using ArrayBuffer views instead of strings, or better yet
    // use memory mapped files.
    return body.split(eol).map(function(x) { return {body: x} })
  }
}
