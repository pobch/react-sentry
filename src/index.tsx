import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './Router'
import reportWebVitals from './reportWebVitals'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

Sentry.init({
  dsn: 'https://5f577b60f749443396afebf37cd863e8@o1000611.ingest.sentry.io/5959982',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
