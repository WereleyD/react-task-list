import { useState } from 'react'

function StateLista() {
    const [tarefa, setTarefa] = useState("")
    const [tarefaLista, setTarefaLista] = useState([])

const handleInputChange = (e) => {
    setTarefa(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()
    if(tarefa.trim() == "" || tarefa.trim().length < 5){
        return
    }
    setTarefaLista([...tarefaLista, tarefa])
    console.log(tarefaLista)
    setTarefa("")
}

    return(
    <>
    <ul>
        {tarefaLista.map((tarefa, index) => (
            <li key={index}> <input type="checkbox"/> {tarefa}</li>
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