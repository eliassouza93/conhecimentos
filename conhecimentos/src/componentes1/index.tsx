import { useState } from "react"
import Formulario147 from "./praticando/consumindo/Formulario"

export default function Laboratorio() {
    const [tarefas, setTarefas] = useState([{
        nome: 'React',
    }])

    return (
        <div  >
            <h1>Iniciando os testes</h1>
            <Formulario147 setTarefas={setTarefas} />

        </div>
    )
}