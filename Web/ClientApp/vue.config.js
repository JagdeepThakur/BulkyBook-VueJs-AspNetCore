module.exports = {
    pages: {
        index: {
            entry: 'src/main.ts'
        }
    },
    configureWebpack: {
        optimization: {
            splitChunks: {
                minSize: 100000,
                maxSize: 250000,
            }
        },
    },
    transpileDependencies: [
        'vuetify'
    ]
}
