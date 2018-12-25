"use strict";

const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const path = require('path');

module.exports = merge(common, {
    name: 'webpack.prod.config',
    performance: {
        hints: 'warning'
    },
});
