 var webpack = require('webpack'),
    webpackMerge = require('webpack-merge'),    
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    commonConfig = require('./webpack.common-aot.js'),
    helpers = require('./helpers');
    ngToolsWebpack = require('@ngtools/webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'PRODUCTION';

module.exports = webpackMerge(commonConfig, {
  
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:3000/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath:'./tsconfig-aot.json'
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
     new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]

});
