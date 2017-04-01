const requiredProperties = [
  'author',
  'canonical',
  'description',
  'image',
  'robots',
  'title'
]

const checkMissingKeys = (requiredProperties, keys) => requiredProperties
  .filter(property => keys.indexOf(property) === -1)

const createMissingKeysErrorMessage = missingKeys => String(
  'The following ' +
  (missingKeys.length > 1 ? 'properties are' : 'property is') +
  ' required: ' +
  missingKeys.sort().join(', ')
)

const checkEmptyKeys = (requiredProperties, keys, args) => keys
  .filter(key => requiredProperties.indexOf(key) !== -1)
  .filter(key => args[key] === '')

const createEmptyKeysErrorMessage = emptyKeys => String(
  'The following ' +
  (emptyKeys.length > 1 ? 'properties' : 'property') +
  ' cannot be empty: ' +
  emptyKeys.sort().join(', ')
)
module.exports = {
  checkMissingKeys,
  checkEmptyKeys,
  requiredProperties,
  createMissingKeysErrorMessage,
  createEmptyKeysErrorMessage
}
