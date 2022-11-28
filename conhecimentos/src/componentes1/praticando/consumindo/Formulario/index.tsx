import { useState } from "react"
import style from './index.module.scss'

interface Itarefa {
    nome: string
}
export default function Formulario147({ setTarefas }: {
    setTarefas: React.Dispatch<React.SetStateAction<
        Itarefa[]>>
}) {
    const [nome, setNome] = useState('')

 
    function AdicionarTarefa(e: any) {
        e.preventDefault()
        setTarefas(tarefasAntigas => [...tarefasAntigas, { nome }])
    }

    return (
        <div className={style.module}>
            <h1>Formulário</h1>
            <form onSubmit={AdicionarTarefa}>
                <input onChange={(e) => setNome(e.target.value)} value={tudo.nome} required type="text" name="nome" />
                <button>adicionar nome</button>



            </form>
            {nome}


        </div>
    )
}