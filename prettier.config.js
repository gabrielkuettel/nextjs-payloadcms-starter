const prettierTailwindPlugin = require('prettier-plugin-tailwindcss')

module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'none',
  plugins: [prettierTailwindPlugin]
}
