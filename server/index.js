import express from 'express'
import path from 'path'
import morgan from 'morgan'
import Promise from 'bluebird'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackConfig from '../webpack.config.dev'
import routes from './routes'

Promise.promisifyAll(mongoose)

// mongoose.connect('mongodb://127.0.0.1/mongodb', (err, db) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(`Mongodb is connected on port 27017`)
//   }
// })

mongoose.connect('mongodb://hoantran:hoantran@ds151450.mlab.com:51450/gamestore')

const app = express();

const complier = webpack(webpackConfig)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(webpackMiddleware(complier,{
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}))
app.use(webpackHotMiddleware(complier))
app.use(morgan('dev'))

app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.listen(3000,() => console.log('Server is running on port 3000'))
