var webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loader: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('this file is create by lili')
    ]
}