import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, "src/index"),
    vendor: path.resolve(__dirname, "src/vendor")
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: 'production'
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html",
      environment: "production",
      meta: {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
      }
    }),
    // Create separate CSS file with cache-busting.
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),
  ],
  module: {
    rules: [
      {test: /\.m?js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.(sa|sc|c)ss$/i, use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']}
    ]
  }
}
