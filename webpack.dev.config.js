const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');

module.exports = merge(common, {
    name: 'webpack.dev.config',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        watchContentBase: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        hot: true,
        disableHostCheck: true,
    },
});
