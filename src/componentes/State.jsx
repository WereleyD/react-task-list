import { useState } from 'react'

function State() {
    const [count, setCount] = useState(0)
    const [nome, setNome] = useState("")
  
    return (
      <>
      <input type="text" placeholder='Nome' onChange={(e) => setNome(e.target.value)}/>
      <p>{nome}</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      </>
    )
}

export default State