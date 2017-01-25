'use strict'
const test = require('ava')
const newliner = require('./parseLineEndings')({eol: '\n'})
const measurer = require('./measureLine')({spaceValue: 1, tabValue: 4})

test('integration test 1', t => {
  const body = `
    four
	four`
  const lines = newliner({body})
  const measured = lines.map(measurer)
  t.deepEqual(measured, [
    { indentLevel: 0, body: '' },
    { indentLevel: 4, body: '    four' },
    { indentLevel: 4, body: '	four' }
  ])
})

test('integration test 2', t => {
  const body = `	four
	    eight
			twelve`
  const lines = newliner({body})
  const measured = lines.map(measurer)
  t.deepEqual(measured, [
    { indentLevel: 4, body: '	four' },
    { indentLevel: 8, body: '	    eight' },
    { indentLevel: 12, body: '			twelve' }
  ])
})

test('integration test 3', t => {
  const body = `	four
	    eight
	
		eight`
  const lines = newliner({body})
  const measured = lines.map(measurer)
  t.deepEqual(measured, [
    { indentLevel: 4, body: '	four' },
    { indentLevel: 8, body: '	    eight' },
    { indentLevel: 4, body: '	' },
    { indentLevel: 8, body: '		eight' }
  ])
})