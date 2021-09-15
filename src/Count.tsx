import { useState } from 'react'

export function Count() {
  const [count, setCount] = useState(1)

  if (count === 5) {
    throw new Error('[unhandle excep] rendering error')
  }

  return (
    <div>
      <h1>Count</h1>
      <p>If count = 5, an error will be thrown</p>
      <button onClick={() => setCount((prev) => prev + 1)} className="btn-count">
        Count: {count}
      </button>
    </div>
  )
}
