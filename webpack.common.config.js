'use strict';

// common logic between the prod and dev configs
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge({
    name: 'webpack.commmon.config',
    entry: [
        './src/index.js',
        './src/public/index.html'
    ],
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: [{
                    loader: 'babel-loader'
                }],
                include: [
                    path.resolve(__dirname, 'src')
                ]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: 'file-loader?name=/fonts/[name].[ext]',
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/i,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, './src/public/index.html'),
            favicon: path.resolve(__dirname, './src/public/favicon.ico')
        })
    ]
});
