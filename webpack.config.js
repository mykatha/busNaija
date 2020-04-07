const path = require('path')

module.exports = {
    entry: './app/assets/scrits/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },

    mode: 'development'
}