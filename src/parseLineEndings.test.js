'use strict'
const test = require('ava')
const f = require('./parseLineEndings')

test('Splits lines', t => {
  t.deepEqual(f({eol: '\n'})({body: 'test\nof\nthis'}), [{body: 'test'}, {body: 'of'}, {body: 'this'}])
  t.deepEqual(f({eol: '\r\n'})({body: 'test\r\nof\r\nthis'}), [{body: 'test'}, {body: 'of'}, {body: 'this'}])
  t.deepEqual(f({eol: '\r\n'})({body: 'test\nof\r\nthis'}), [{body: 'test\nof'}, {body: 'this'}])
})