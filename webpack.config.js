const path = require('path');
{
    module.exports = {
        entry: {
            index: './src/index.js',
            index1: './src/index1.js'
        },
        output: {
            path: path.resolve(__dirname,'stage'),
            filename: '[name]_bundle.js'
        }
    }         
}