const path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        index1: './src/index1.js'
    },
    output: {
        path: path.resolve(__dirname,'stage'), //__dirname is an environment variable that tells you the absolute path of the directory containing the currently file.
        filename: '[name]_bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|tmp)/,
                use: {
                   loader: 'babel-loader',
                   options: {
                       presets: ['@babel/preset-env']
                   }
                }
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            path: path.resolve(__dirname,'stage'),
            filename: './index.html',
            template: path.resolve('test.html'),
            inject: 'body'
        })
    ]        
}
