import './assets/scsses/global.scss'

import React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'

import App from './app'
import { StoreProvider } from './utils/context'
import history from './utils/history'

ReactDOM.render(
  <Router history={history}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </Router>,
  document.getElementById('app'),
)

module.hot.accept()
