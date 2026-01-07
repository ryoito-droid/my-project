import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Project</h1>
        <p>Built with Miyabi - Autonomous Development Framework</p>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="read-the-docs">
          Click on the button to test the counter
        </p>
      </header>
    </div>
  )
}

export default App
