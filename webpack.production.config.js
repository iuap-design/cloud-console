var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'cheap-source-map',
    entry: [
        path.resolve(__dirname, 'app/main.jsx'),
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.js[x]?$/,
                include: path.resolve(__dirname, 'app'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new uglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new CopyWebpackPlugin([
            {from: './app/index.html', to: 'index.html'},
            {from: './app/main.css', to: 'main.css'}
        ]),
        new ExtractTextPlugin('[name].[chunkhash].css')
    ]
};
