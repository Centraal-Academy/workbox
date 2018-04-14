if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    console.log('resource loaded')
    navigator.serviceWorker.register('sw.js')
      .then(console.log)
      .catch(console.error)
  })
}
