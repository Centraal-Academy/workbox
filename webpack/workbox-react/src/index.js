import React from 'react'
import ReactDOM from 'react-dom'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js')
      .then(console.log)
      .catch(console.error)
  })
}

const appContainer = document.getElementById('app-container')
const firstElement = <h1>Welcome to workbox-react</h1>
ReactDOM.render(firstElement, appContainer)
