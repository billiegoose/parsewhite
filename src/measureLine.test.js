'use strict'
const test = require('ava')
const measure = require('./measureLine')({spaceValue: 1, tabValue: 4})

test('really should be using quickcheck', t => {
  t.deepEqual(measure({body: ''}), {body: '', indentLevel: 0})
  t.deepEqual(measure({body: ' \n'}), {body: ' \n', indentLevel: 1})
  t.deepEqual(measure({body: '\t fun\t\n'}), {body: '\t fun\t\n', indentLevel: 5})
  t.deepEqual(measure({body: '\t\tdef  '}), {body: '\t\tdef  ', indentLevel: 8})
})
