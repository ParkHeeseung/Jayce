const { CLIEngine } = require('eslint')
 
const cli = new CLIEngine({})
 
module.exports = {
  '*.{ts,tsx}': files =>
    './node_modules/.bin/eslint --fix --max-warnings=0 ' + files.filter(file => !cli.isPathIgnored(file)).join(' ')
}