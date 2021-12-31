import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'development'
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html"
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
