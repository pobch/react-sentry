import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from './Router'
import reportWebVitals from './reportWebVitals'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
// import { CaptureConsole } from '@sentry/integrations'

Sentry.init({
  dsn: 'https://5f577b60f749443396afebf37cd863e8@o1000611.ingest.sentry.io/5959982',
  integrations: [
    new Integrations.BrowserTracing(),
    // new CaptureConsole({
    //   levels: ['error'],
    // }) as any,
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
})

ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <React.Fragment>
          <h1>You have encountered an error</h1>
          <p>
            <div>Error:</div>
            <div>{error.toString()}</div>
          </p>
          <p>
            <div>Component Stack:</div>
            <div>{componentStack}</div>
          </p>
          <button
            onClick={() => {
              // setCount(1)

              /* When resetError() is called it will remove the Fallback component */
              /* and render the Sentry ErrorBoundary's children in their initial state */
              resetError()
            }}
          >
            Click here to reset!
          </button>
        </React.Fragment>
      )}
    >
      <Router />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
