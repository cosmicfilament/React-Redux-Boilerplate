'use strict';

// common logic between the prod and dev configs
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');
const path = require('path');

console.log(path.resolve(__dirname, 'src', 'index.js'));

module.exports = merge({
    name: 'webpack.commmon.config',
    context: path.resolve(__dirname, 'src'),
    entry: [
        './index.js',
        './public/index.html',
    ],
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        configFile: path.resolve(__dirname, '.babelrc'),
                    }
                }],
                include: [
                    path.resolve(__dirname, './src')
                ]
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
            {
                test: /\.s(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
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
                ],
                include: [
                    path.resolve('./src/images')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            favicon: './images/favicon.ico'
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
        })
    ]
});
