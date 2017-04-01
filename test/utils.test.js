const test = require('ava')
const {
  requiredProperties,
  checkMissingKeys,
  createErrorMessage
} = require('../lib/utils')

test('requiredProperties should be an array', t => {
  const actual = Object.prototype.toString.call(requiredProperties)
  const expected = '[object Array]'
  t.is(actual, expected)
})

test('checkMissingKeys', t => {
  const actual = checkMissingKeys(['title', 'author'], ['author'])
  const expected = ['title']

  t.deepEqual(actual, expected, 'should return the missing keys')
})

test('createErrorMessage missing one key', t => {
  const actual = createErrorMessage(['title'])
  const expected = 'The following property is required: title'

  t.is(actual, expected)
})

test('createErrorMessage missign more than one key', t => {
  const actual = createErrorMessage(['title', 'author'])
  const expected = 'The following properties are required: title, author'

  t.is(actual, expected)
})
