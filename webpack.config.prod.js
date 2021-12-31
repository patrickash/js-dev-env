import path from 'path';
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
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css"
    }),
  ],
  module: {
    rules: [
      {test: /\.m?js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/i, use: [MiniCssExtractPlugin.loader,'css-loader']},
      {test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']}
    ]
  }
}
