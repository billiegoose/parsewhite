const thru = require('thru')
const upath = require('upath')
const fs = require('fs')

function readFileTransformConfig (opts) {
  return function readFileTransform () {
    return thru((obj, cb) => {
      obj.stream = fs.createReadStream(upath.join(obj.root, obj.path))
      console.log(obj.stream)
      cb(null, obj)
    })
  }
}

module.exports = readFileTransformConfig
