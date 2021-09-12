import path from 'path';
import webpack from 'webpack';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
const __dirname = dirname(fileURLToPath(import.meta.url)); // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag

const plugins = [
  new CopyPlugin({
    patterns: [{ from: './client/robots.txt', to: '.' }],
  }),
  new Dotenv({
    path: path.resolve(__dirname, `../.${process.env.NODE_ENV}.env`),
  }),
  new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/), // Avoid loading Moment.js with Chart.js
  new HtmlWebpackPlugin({
    template: './client/index.html',
    favicon: './client/assets/favicon.ico',
  }),
  new MiniCssExtractPlugin(),
];

if (process.env.ANALYZE) plugins.push(new BundleAnalyzerPlugin());

export default {
  entry: {
    index: './client/index.js',
    bundle: './client/app.jsx',
    loQL: './node_modules/loql-cache/loQL.js',
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(png|jpg|gif|jpeg|ico|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
