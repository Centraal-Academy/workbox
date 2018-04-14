/* global importScripts, workbox */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js')

workbox.skipWaiting()
workbox.clientsClaim()

workbox.routing.registerRoute(
  new RegExp(/\.css$/),
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  new RegExp(/\.js$/),
  workbox.strategies.networkOnly()
)

workbox.precaching.precacheAndRoute([])
