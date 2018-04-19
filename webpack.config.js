const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        new HTMLWebpackPlugin({
            inject: false,
            template: path.join(__dirname, './src/index.html'),
        }),
    ],

    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js?/,
            }
        ]
    },

    devServer: {
        inline: true,
        port: 3011
    }
};