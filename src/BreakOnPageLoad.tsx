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

export function BreakOnPageLoad() {
  useEffect(() => {
    mockApi(2000)
  }, [])

  return (
    <div>
      <h1>Break on Page Load</h1>
    </div>
  )
}
