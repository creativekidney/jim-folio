const path = require('path');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.jsx',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2'],
            plugins: ['transform-react-jsx'],
          },
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              minimize: false,
              localIdentName: '[name]__[local]--[hash:base64:5]',
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?name=[path][name].[ext]',
          // Used for image min/optimisation. Options to be defined
          'image-webpack-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        loaders: ['file-loader?name=assets/fonts/[name].[ext]'],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json'],
  },
  devtool: 'source-map',
};
