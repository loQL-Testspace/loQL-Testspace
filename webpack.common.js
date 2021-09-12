import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
const __dirname = dirname(fileURLToPath(import.meta.url)); // https://stackoverflow.com/questions/46745014/alternative-for-dirname-in-node-when-using-the-experimental-modules-flag

export default {
  entry: {
    index: './client/index.js',
    bundle: './client/app.jsx',
    loQL: './node_modules/loql-cache/loQL.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
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
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|jpeg|ico)$/i,
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
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, `./.${process.env.NODE_ENV}.env`),
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      favicon: './client/assets/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
