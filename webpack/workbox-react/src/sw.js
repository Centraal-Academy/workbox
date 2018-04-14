/* global self, workbox */
workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp(/\.js$/),
  workbox.strategies.networkOnly()
)

workbox.precaching.precacheAndRoute(self.__precacheManifest)
