'use strict'
const test = require('ava')
const s = require('./s2i')
const measure = require('./measureLine')({spaceValue: 1, tabValue: 4})

test('really should be using quickcheck', t => {
  let ml = measure()
  ml.write({body: s('')})
  t.deepEqual(ml.read(), {body: s(''), indentLevel: 0})
  ml.write({body: s(' \n')})
  t.deepEqual(ml.read(), {body: s(' \n'), indentLevel: 1})
  ml.write({body: s('\t fun\t\n')})
  t.deepEqual(ml.read(), {body: s('\t fun\t\n'), indentLevel: 5})
  ml.end({body: s('\t\tdef  ')})
  t.deepEqual(ml.read(), {body: s('\t\tdef  '), indentLevel: 8})
})
