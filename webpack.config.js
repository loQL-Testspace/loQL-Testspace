const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Entry point
    entry: {
        index: './client/index.js',
        handlers: './client/handlers.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        clean: true
    },
    mode: process.env.NODE_ENV, // "development" or "production"
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html',
          }),
    ],
    devServer: {
        contentBase: "./client",
        proxy: {
            '/api/**': {
                target: 'http://localhost:4000/',
                // secure: false,
                logLevel: 'debug',
            },        
        }
    }
}