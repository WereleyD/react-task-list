import { useState } from 'react'

function StateLista() {
    const [tarefa, setTarefa] = useState("")
    const [tarefaLista, setTarefaLista] = useState([])
    const [tarefasConcluidas, setTarefasConcluidas] = useState([])

const handleInputChange = (e) => {
    setTarefa(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(tarefa.trim() == "" || tarefa.trim().length < 5){
        alert(`Mínimo de caracteres: 5`)
        setTarefa("")
        return
    }
    setTarefaLista([...tarefaLista, tarefa])
    console.log(tarefaLista)
    setTarefa("")
}

const handleTaskComplete = (index) => {
    const taskToComplete = tarefaLista[index]
    setTarefasConcluidas([...tarefasConcluidas, taskToComplete])
    setTarefaLista(tarefaLista.filter((_, i) => i !== index))
}

    return(
    <>
    <h2>Tarefas em aberto</h2>
    <ul>
        {tarefaLista.map((tarefa, index) => (
            <li key={index}>
                <input type='button' onClick={() => handleTaskComplete(index)} value={"x"}/>
                {tarefa}
            </li>
        ))}
    </ul>
    <h2>Tarefas Concluídas</h2>
    <ul>
    {tarefasConcluidas.map((tarefaConcluida, index) => (
          <li key={index} style={{ textDecoration: 'line-through' }}>
            {tarefaConcluida}
          </li>
        ))}
    </ul>
    <form onSubmit={handleSubmit}>
        <input type="text" value={tarefa} onChange={handleInputChange}/>
        <button type='submit'>Adicionar Tarefa</button>
    </form>
    </>
    )
}

export default StateLista