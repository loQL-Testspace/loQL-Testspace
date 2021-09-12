import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    static: './client',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/api/**': {
        target: 'http://localhost:3000/',
        logLevel: 'debug',
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
