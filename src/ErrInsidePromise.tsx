import { useEffect } from 'react'
import * as Sentry from '@sentry/react'
import { Severity } from '@sentry/react'

async function mockApi(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // manual log
      Sentry.captureMessage('[log at unhandled prom] warning', Severity.Warning)

      // throw promise error
      reject(new Error('[unhandle prom] api response error'))
    }, ms)
  })
}

export function ErrInsidePromise() {
  useEffect(() => {
    mockApi(2000)
  }, [])

  return (
    <div>
      <h1>Error inside Promise which is called inside useEffect()</h1>
      <p>This page will break on Page Load</p>
    </div>
  )
}
