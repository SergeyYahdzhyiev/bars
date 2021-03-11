const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CSSMinimizer = require('css-minimizer-webpack-plugin');
const CSSExtract = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clear: true,
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CSSMinimizer()],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [CSSExtract.loader, 'css-loader'],
      },
      {
        test: /\.ico$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name][ext]',
        },
      },
      {
        test: /\.woff(2)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new CSSExtract(),
    new HTMLPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    posrt: 3000,
  },
};