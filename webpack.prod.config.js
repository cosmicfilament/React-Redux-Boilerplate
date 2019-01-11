"use strict";

const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const CleanWebPackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
    name: 'webpack.prod.config',
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            }),
        ],
    },
    output: {
        // in development mode the bundle is kept in memory
        // in production the code is minified and placed in the dist subdirectory.
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebPackPlugin([path.resolve(__dirname, 'dist')])
    ],
});
