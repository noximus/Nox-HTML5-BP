const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
  entry: './src/index.js',
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
    title: 'Output Management'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
};
