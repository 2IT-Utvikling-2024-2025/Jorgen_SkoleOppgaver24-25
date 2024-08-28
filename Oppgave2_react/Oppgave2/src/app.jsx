import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>definitely a PG site</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 0.01)}>
          Age: {count}
        </button>
        <p>
          you must be at least 18+ to enter
        </p>
      </div>
    </>
  )
}
