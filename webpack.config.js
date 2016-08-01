'use strict';

let HtmlWebpackPlugin = require('html-webpack-plugin');
let FailPlugin = require('webpack-fail-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    plugins: [
        FailPlugin,
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        preLoaders: [
            { test: /\.tsx?$/, loader: 'tslint' },
        ],
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
        ],

    }
};
