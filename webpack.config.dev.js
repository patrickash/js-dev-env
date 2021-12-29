import path from 'path';
import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'test'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT
    }),

    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  module: {
    rules: [
      {test: /\.m?js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/i, use: ['style-loader','css-loader']},
      {test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader,'style-loader','css-loader','postcss-loader','sass-loader']}
    ]
  }
}
