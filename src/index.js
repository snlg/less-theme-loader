import { getOptions } from 'loader-utils'
import validateOptions from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    theme: {
      type: 'string',
    },
    filePath: {
      type: 'string',
    },
  },
  additionalProperties: false,
}
// {string} source: 加载的html的字符串值
module.exports = function (source) {
  const options = getOptions(this)
  validateOptions(schema, options, 'Example Loader')
  // console.log(source)
  const path = `@import "${options.filePath}/${options.theme}.less"`
  return `${path};\n ${source}`
}
