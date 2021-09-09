const path = require('path');

module.exports = {
  entry: {
    bundle: './client/index.js',
    loQL: './node_modules/loql-cache/loQL.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    static: './client',
  },
};
