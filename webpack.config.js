var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
console.log(TARGET);
var common = {
    entry: [path.resolve(ROOT_PATH, 'app/main')],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'About Karan Kotwal'
        })
    ]
};

if (TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    include: path.resolve(ROOT_PATH, 'app')
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                },
                {
                  test: /\.(jpg|png|gif)$/,
                  loader: 'file-loader',
                  include: path.resolve(ROOT_PATH, 'app/images'),
                },
                {
                  test: /\.(webm|mp4)$/,
                  loader: 'file-loader',
                  include: path.resolve(ROOT_PATH, 'app/video'),
                },
                {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                 use: [{
                   loader: 'file-loader',
                 }]
             },

            ]
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}

if (TARGET === 'start') {
    module.exports = merge(common, {
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style-loader', 'css-loader']
                },
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot-loader', 'babel-loader'],
                    include: path.resolve(ROOT_PATH, 'app')
                },
                {
                  test: /\.(jpg|png|gif)$/,
                  loader: 'file-loader',
                },
                {
                  test: /\.(webm|mp4)$/,
                  loader: 'file-loader',
                },
                {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                 use: [{
                   loader: 'file-loader',
                   options: {
                     name: '[name].[ext]',
                     outputPath: 'fonts/',    // where the fonts will go
                     publicPath: '../'       // override the default path
                   }
                 }]
             },
            ]
        }
    });
}
