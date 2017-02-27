var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    helpers = require('./helpers');

module.exports = {

    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                enforce: 'pre',
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                enforce: 'pre',
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({ use: 'css-loader', fallback: 'style-loader' })
            },
            {
                enforce: 'pre',
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                use: 'raw-loader'
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ProvidePlugin({
            $: 'jquery', jQuery: 'jquery', jquery: 'jquery'
        })
    ]

};
