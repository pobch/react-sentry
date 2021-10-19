import { useState } from 'react'

export function BreakOnClick() {
  const [count, setCount] = useState(1)

  if (count === 5) {
    throw new Error('[unhandle excep] rendering error')
  }

  return (
    <div>
      <h1>Break onClick</h1>
      <p>
        <button
          onClick={() => {
            throw new Error('[unhandle excep] onClick error')
          }}
        >
          Suddenly Break
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            setTimeout(() => {
              throw new Error('[unhandle excep] setTimeout error')
            }, 2000)
          }}
        >
          Delay Break
        </button>
      </p>

      <h2>Count</h2>
      <p>If count = 5, an error will be thrown</p>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)} className="btn-count">
          Count: {count}
        </button>
      </div>
    </div>
  )
}
