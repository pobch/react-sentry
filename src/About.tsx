import { useEffect } from 'react'

async function mockApi(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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
