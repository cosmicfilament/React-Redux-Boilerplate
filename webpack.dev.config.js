const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

// devServer is a webpack server that lets you run your front end web code live
module.exports = merge(common, {
    name: 'webpack.dev.config',
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        watchContentBase: true,
        historyApiFallback: true,
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true,
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});
