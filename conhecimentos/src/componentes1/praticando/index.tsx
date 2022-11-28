import { createElement, useState } from "react"
import Lista from "./lista"


export default function Praticando() {

    const [nome, setNome] = useState('')

    const [pos, setPos] = useState('')

    function Pegar(event: any) {
        event?.preventDefault()
        setPos(nome)

        

    }

    const lista = [
        { nome: 'Joao', idade: 33 },
        { nome: 'Maria', idade: 52 },
        { nome: 'MPedro', idade: 32 },
        { nome: 'Joana', idade: 55 },
        { nome: 'Carlos', idade: 33 },
        { nome: 'Ana Carolina', idade: 22 },
        { nome: 'Vitor', idade: 67 },
        { nome: 'Ricardo', idade: 29 }
    ]

    return (
        <div>
            <input   type="text" onChange={(e) => setNome(e.target.value)} />

            <button onClick={Pegar}>Clicar</button>

            <h1> {pos} </h1>

            <h1>ReactJS</h1>

            <Lista setLista={lista} />



        </div>
    )
}