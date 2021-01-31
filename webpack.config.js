module.exports = function (config) {
    return {
        mode: 'development',
        resolve: {
            extensions: ['.js']
        },
        ...config
    }
}
