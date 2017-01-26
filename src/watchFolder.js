const sane = require('sane')
const miss = require('mississippi')
const upath = require('upath')
const emitStream = require('emit-stream')
const EventEmitter = require('events').EventEmitter

module.exports = function watchFolderConfigure (opts) {
  return function watchFolder (root) {
    const emitter = new EventEmitter()
    const watcher = sane(root, {glob: ['**/*.js']})
    watcher.on('ready', () => console.log('ready'))
    watcher.on('change', (path, root, stat) => {
      path = upath.normalize(path)
      root = upath.normalize(root)
      emitter.emit('change', {path, root, stat})
    })
    watcher.on('add', (path, root, stat) => {
      path = upath.normalize(path)
      root = upath.normalize(root)
      emitter.emit('change', {path, root, stat})
    })
    let streamer = emitStream.toStream(emitter).pipe(miss.through.obj((arr, enc, callback) => {
      callback(null, arr[1])
    }))
    return streamer
  }
}
if (!module.parent) {
  let f = module.exports()
  let s = f('.')
  s.on('data', console.log)
}
