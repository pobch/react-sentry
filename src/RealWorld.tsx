import { useEffect, useState } from 'react'
import * as Sentry from '@sentry/react'
import axios, { AxiosResponse } from 'axios'
;(window as any)._axios = axios

async function fetch(): Promise<AxiosResponse<Record<string, any>[]>> {
  // ! Case: Throw (reject) with 500 response
  // return await axios.get('http://localhost:8070/error500')

  // ! Case: Success with 302 -> 200
  return await axios.get('http://localhost:8070/redirect/aws-staging.json')

  // ! Case: Success with 200
  // return await axios.get('http://localhost:8070/app-urls/aws-staging.json')
}

async function nested() {
  const res = await fetch()
  return res
}

export function RealWorld() {
  const [apiState, setApiState] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error'
    data: Record<string, any>[] | null
    error: Error | null
  }>({
    status: 'idle',
    data: null,
    error: null,
  })
  useEffect(() => {
    async function fetchData() {
      setApiState({ status: 'loading', data: null, error: null })
      try {
        const res = await nested()
        setApiState({ status: 'success', data: res.data, error: null })
      } catch (error) {
        if (error instanceof Error) {
          // ! Case: Manually send the error instance to Sentry
          // Sentry.setExtra('errorObj', error)
          // Sentry.captureException(error)

          // ! Case: Automatically send console.error() to Sentry if there is `new CaptureConsole()` in `Sentry.init()`
          // console.error(error)

          setApiState({ status: 'error', data: null, error: error })
        } else {
          // TODO
        }
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h1>API Response</h1>
      <p>
        <strong>Status </strong>
        {apiState.status}
      </p>
      <p>
        <strong>Data </strong>
      </p>
      <pre>{JSON.stringify(apiState.data, undefined, 2)}</pre>
      <p>
        <strong>Error </strong>
        {apiState.error?.message}
      </p>
    </>
  )
}
