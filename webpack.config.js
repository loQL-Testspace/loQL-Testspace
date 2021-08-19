import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const __dirname = dirname(fileURLToPath(import.meta.url)); // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag

export default {
  entry: {
    index: './client/index.js',
    handlers: './client/handlers.js',
    sw: './node_modules/loql/sw.js',
  },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    clean: true,
  },
  mode: process.env.NODE_ENV, // "development" or "production"
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ],
  devServer: {
    contentBase: './client',
    proxy: {
      '/api/**': {
        target: 'http://localhost:4000/',
        // secure: false,
        logLevel: 'debug',
      },
    },
  },
};
