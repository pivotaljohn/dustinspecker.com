const config = require('./webpack.config.js')
const merge = require('webpack-merge')

delete config.serve

module.exports = merge(config, {
  mode: 'production'
})
