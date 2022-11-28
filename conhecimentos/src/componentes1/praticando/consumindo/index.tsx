import { useState } from "react"
import style from './index.module.scss'

export default function Laboratorio() {
    const [cont, setCont] = useState(0)
    const [nome, setNome] = useState('')
    const [nomeTratado, setNomeTratado] = useState('')

    const [tarefasAntigas, setTarefasAntigas] = useState('')

    /*function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setNomeTratado(tarefasAntigas => [...tarefasAntigas, { ...tudo }])

    }*/

    function Tratamento(e: any) {
        e.preventDefault()
        setNomeTratado(nome)
        
    }
    function Contador() {
        setCont(cont + 1)
    }
    function Contador1() {
        setCont(cont - 1)
    }
    return (
        <div className={style.module}>
            <h1>Iniciando os testes</h1>
            <h1>Número atual:  {cont} </h1>

            <form onSubmit={Tratamento} >
                <input required type="text" onChange={(e) => setNome(e.target.value)} />
                <button >Adicionar nome</button>
            </form>

            <button onClick={Contador}>Adicionar + 1</button>
            <button onClick={Contador1}>Adicionar - 1</button>

            <ul>
                <li> {nomeTratado} </li>
            </ul>
        </div>
    )
}