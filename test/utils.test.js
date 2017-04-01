const test = require('ava')
const {
  requiredProperties,
  checkMissingKeys,
  createMissingKeysErrorMessage,
  checkEmptyKeys,
  createEmptyKeysErrorMessage
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

test('createMissingKeysErrorMessage missing one key', t => {
  const actual = createMissingKeysErrorMessage(['title'])
  const expected = 'The following property is required: title'

  t.is(actual, expected)
})

test('createMissingKeysErrorMessage missing more than one key', t => {
  const actual = createMissingKeysErrorMessage(['title', 'author'])
  const expected = 'The following properties are required: author, title'

  t.is(actual, expected)
})

test('checkEmptyKeys', t => {
  const actual = checkEmptyKeys(
    ['title', 'author'],
    ['title', 'author'],
    {
      title: '',
      author: 'me'
    }
  )
  const expected = ['title']

  t.deepEqual(actual, expected)
})

test('createEmptyKeysErrorMessage with one empty key', t => {
  const actual = createEmptyKeysErrorMessage(['title'])
  const expected = 'The following property cannot be empty: title'

  t.is(actual, expected)
})

test('createEmptyKeysErrorMessage with more than one empty key', t => {
  const actual = createEmptyKeysErrorMessage(['title', 'author'])
  const expected = 'The following properties cannot be empty: author, title'

  t.is(actual, expected)
})
