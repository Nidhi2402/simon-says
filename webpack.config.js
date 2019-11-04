const path = require('path');
const HWP = require('html-webpack-plugin');
const cssPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    mode: 'development',
    output: {
        filename: 'build.js',
        path: path.join(__dirname, '/dist')},
    module:{
        rules:[{
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel-loader'
        },
        {
            test: /\.(css|scss)$/,
            use: [cssPlugin.loader, "css-loader", "sass-loader"]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
          }]
    },
    plugins:[
        new HWP(
           {template: path.join(__dirname,'/src/boxes.html')}
        ),
        new cssPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    }
}