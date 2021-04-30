const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CSSMinimizer = require('css-minimizer-webpack-plugin');
const CSSExtract = require('mini-css-extract-plugin');
const FaviconPlugin = require('favicons-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
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
    contentBase: path.resolve(__dirname, 'build'),
    port: 4200,
  },
};
