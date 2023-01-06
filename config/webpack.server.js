const path = require('path');
const webpackExterrnals = require('webpack-node-externals'); // 不再捆绑所有模块，保留为 require(‘module')

module.exports = {
    target: 'node',
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, '../src/server.js'),
    output: {
        filename: 'bundle_server.js',
        path: path.resolve(__dirname, '../dist')
    },
    externals: [webpackExterrnals()]
}