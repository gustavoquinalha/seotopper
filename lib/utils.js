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

const createErrorMessage = missingKeys => String(
  'The following ' +
  (missingKeys.length > 1 ? 'properties are' : 'property is') +
  ' required: ' +
  missingKeys.join(', ')
)

module.exports = {
  checkMissingKeys,
  requiredProperties,
  createErrorMessage
}
