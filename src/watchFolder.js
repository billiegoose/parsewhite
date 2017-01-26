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
    watcher.on('change', function watcherOnChange (path, root, stat) {
      path = upath.normalize(path)
      root = upath.normalize(root)
      emitter.emit('change', {path, root, stat})
    })
    watcher.on('add', function watcherOnAdd (path, root, stat) {
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
