export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>
        <button
          onClick={() => {
            throw new Error('[unhandle excep] onClick error')
          }}
        >
          Break
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
    </div>
  )
}
