const merge = require('webpack-merge')
const common = require('./webpack.common')
const workboxPlugin = require('workbox-webpack-plugin')

const config = merge(common, {
  plugins: [
    new workboxPlugin.InjectManifest({
      exclude: [/\.js$/],
      swSrc: 'src/sw.js'
    })
  ]
})

module.exports = config
