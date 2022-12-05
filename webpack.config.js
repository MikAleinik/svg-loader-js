const path = require("path");

const baseConfig = {
    entry: {
        app: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    }
};
