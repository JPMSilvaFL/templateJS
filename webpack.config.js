const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: {
        bundle: ['./server.js'],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
    },

    devtool: 'source-map'
};
