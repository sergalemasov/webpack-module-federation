const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const baseConfig = require('../../webpack.config');

module.exports = baseConfig({
    entry: {
        index: './index'
    },
    context: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, '..', '..', 'dist', 'host'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Host',
            hash: true,
            template: './index.html'
        }),
        new ModuleFederationPlugin({
            remotes: {
                first_shared: 'first_shared@//localhost:4201/first-shared.js'
            }
        }),
    ],
    devServer: {
        port: '4200',
        open: true
    }
});
