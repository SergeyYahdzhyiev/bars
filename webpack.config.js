const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CSSMinimizer = require('css-minimizer-webpack-plugin');
const CSSExtract = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CSSMinimizer()],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
      },
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
