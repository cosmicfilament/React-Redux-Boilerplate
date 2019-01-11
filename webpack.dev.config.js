const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');
const WebpackBar = require('webpackbar');

// these is the local computer that I am running off of
// I was also testing with my tablet and phone so in order to
// be able to connect I am using an ip address vice localhost
// this could all be done in the package.json but this is easier
const ip = '192.168.1.52';
const localhost = 'localhost';
const port = '3000';

console.log(`Connecting to: [http://${ip}:${port}]`);

// devServer is a webpack server that lets you run your front end web code live
module.exports = merge(common, {
    name: 'webpack.dev.config',
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: `http://${ip}:${port}`
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        watchContentBase: true,
        historyApiFallback: true,
        host: ip,
        port: port,
        hot: true,
        open: true,
        disableHostCheck: true,
        noInfo: true,
        stats: 'minimal'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new WebpackBar()
    ]
});
