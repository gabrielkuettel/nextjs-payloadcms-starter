const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss')

module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'none',
  plugins: [prettierPluginTailwindcss]
}
