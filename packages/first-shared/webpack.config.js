const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const baseConfig = require('../../webpack.config');

module.exports = baseConfig({
    entry: {
        index: './test'
    },
    context: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, '..', '..', 'dist', 'first-shared'),
        filename: '[name].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'first_shared',
            filename: 'first-shared.js',
            library: { type: 'var', name: 'first_shared' },
            exposes: {
                './test': './test.js'
            },
        })
    ],
    devServer: {
        port: '4201'
    }
});
