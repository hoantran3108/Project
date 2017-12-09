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
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    })
  ],
  module: {
    rules: [
      {
        test:/\.js$/,
        include: path.join(__dirname,'client'),
        use: ['babel-loader']
      },
      {
        test:/\.css$/,
        include: path.join(__dirname,'dist/css'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: {
            modules: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      CSS: path.resolve(__dirname, 'dist/css')
    }
  }
}
