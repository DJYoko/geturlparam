const path = require('path');

module.exports = {
    mode: 'development', // 'production' | 'development' | 'none'
    entry: './src/getUrlParam.ts',

    output: {
        path: path.join(__dirname, 'docs'),
        filename: 'getUrlParam.js'
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        modules: [
            'node_modules',
        ],
        extensions: [
            '.ts',
            '.js'
        ]
    }
};