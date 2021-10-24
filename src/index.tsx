import './assets/scsses/global.scss'

import React from 'react'
import * as ReactDOM from 'react-dom'
import { ScreenClassProvider, setConfiguration } from 'react-grid-system'
import { Router } from 'react-router-dom'

import App from './app'
import { StoreProvider } from './utils/context'
import history from './utils/history'

// Configuration for react-grid-system
setConfiguration({
  gutterWidth: 0,
  containerWidths: [0, 0, 980, 980, 980],
  breakpoints: [0, 0, 751, 751, 751],
})

ReactDOM.render(
  <Router history={history}>
    <ScreenClassProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ScreenClassProvider>
  </Router>,
  document.getElementById('app'),
)

module.hot.accept()
