import { useState } from "react"
import Lista from "./lista"


export default function Praticando() {

    const [valor, setValor] = useState('')

    const [pos, setPos] = useState(false)


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
            <h1>ReactJS</h1>

            <Lista setLista={lista} />

            <button>Clicar</button>

        </div>
    )
}