import { useState } from 'react'
import './App.css'
import './assets/styles.css'
import State from "./componentes/State.jsx"
import StateLista from "./componentes/StateLista.jsx"

function App() {

  return (
    <>
    <div className='tasks-container'>
      <StateLista/>
    </div>
      
    </>
  )
}

export default App
