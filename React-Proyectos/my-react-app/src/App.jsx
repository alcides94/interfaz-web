//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {signal} from "@preact/signals-react"

import './App.css'

const count = signal(0);

function App() {
  //const [count, setCount] = useState(0)
  
 

  //1-se agrego para mostrar por consola
  console.log("Re-Render");
  
  //-se procede a mostrar los componentes a traves del navegador
  //indicando que se carga todo el componente


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
    
        <button onClick={() => count.value++}>
        count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
