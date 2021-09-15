export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          throw new Error('[unhandle excep] onClick error')
        }}
      >
        Break
      </button>
    </div>
  )
}
