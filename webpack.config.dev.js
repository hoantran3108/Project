import path from 'path'
import webpack from 'webpack'

export default {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
    ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        include: [
          path.join(__dirname,'client'),
          path.join(__dirname,'server/shared')
        ],
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}
