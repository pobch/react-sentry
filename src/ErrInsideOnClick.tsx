export function ErrInsideOnClick() {
  return (
    <div>
      <h1>Error inside onClick</h1>
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
          Delay Break with setTimeout
        </button>
      </p>
    </div>
  )
}
