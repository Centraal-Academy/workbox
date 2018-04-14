const config = {
  globDirectory: './build/',
  globPatterns: [
    '**/*.html'
  ],
  swDest: './build/sw.js',
  runtimeCaching: [
    {
      urlPattern: new RegExp(/\.css$/),
      handler: 'staleWhileRevalidate'
    },
    {
      urlPattern: new RegExp(/\.js$/),
      handler: 'networkOnly'
    }
  ],
  clientsClaim: true,
  skipWaiting: true
}

module.exports = config
