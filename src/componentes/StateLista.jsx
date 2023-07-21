import { useState, useRef } from 'react'

function StateLista() {
    const [tarefa, setTarefa] = useState("")
    const [tarefaLista, setTarefaLista] = useState([])
    const [tarefasConcluidas, setTarefasConcluidas] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

const handleInputChange = (e) => {
    setTarefa(e.target.value)
}

const myRef = useRef(null)

const handleSubmit = (e) => {
    e.preventDefault()
    if(tarefa.trim() == "" || tarefa.trim().length < 5){
        //alert(`Mínimo de caracteres: 5`)
        setTarefa("")
        setErrorMessage("Mínimo de caracteres: 5")
        if(myRef.current) {
            myRef.current.focus()
        }
        return
    }
    setTarefaLista([...tarefaLista, tarefa])
    console.log(tarefaLista)
    setTarefa("")
    setErrorMessage("")
}

const handleTaskComplete = (index) => {
    const taskToComplete = tarefaLista[index]
    setTarefasConcluidas([...tarefasConcluidas, taskToComplete])
    setTarefaLista(tarefaLista.filter((_, i) => i !== index))
}

    return(
    <>
    <h2>Tarefas em aberto</h2>
    <ul style={{ listStyleType: 'none' }}>
        {tarefaLista.map((tarefa, index) => (
            <li key={index} className='li-container'>
                <input type='button' onClick={() => handleTaskComplete(index)} value={"x"}/>
                {tarefa}
            </li>
        ))}
    </ul>
    <h2>Tarefas Concluídas</h2>
    <ul style={{ listStyleType: 'none' }}>
    {tarefasConcluidas.map((tarefaConcluida, index) => (
          <li key={index} style={{ textDecoration: 'line-through' }}>
            {tarefaConcluida}
          </li>
        ))}
    </ul>
    <form className='input-container' onSubmit={handleSubmit}>
        <input type="text" value={tarefa} ref={myRef} onChange={handleInputChange}/>
        <p className='error-message'>{errorMessage}</p>
        <button type='submit'>Adicionar Tarefa</button>
    </form>
    </>
    )
}

export default StateLista