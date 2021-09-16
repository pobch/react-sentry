import { useEffect } from 'react'
import * as Sentry from '@sentry/react'
import { Severity } from '@sentry/react'

async function mockApi(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Sentry.captureMessage('[log at unhandled prom] warning', Severity.Warning)
      reject(new Error('[unhandle prom] api response error'))
    }, ms)
  })
}

export function About() {
  useEffect(() => {
    mockApi(2000)
  }, [])

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
