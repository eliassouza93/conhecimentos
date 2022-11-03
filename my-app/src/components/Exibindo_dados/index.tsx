import style from './Tarefa.module.scss'
import { useState } from "react"

export default function Exibindo() {

    const [mostra, setMostra] = useState('')

    return (

        <>
           <input className={style.mensagem} onChange={(mostra => setMostra(mostra.target.value))} />
            <h2> {mostra} </h2>

        </>

    )
}









