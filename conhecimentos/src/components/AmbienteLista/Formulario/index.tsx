
import { useState } from "react"
interface IPessoa {
    nome: string
    idade: number
}

export default function Formulario({ setLista }: { setLista: React.Dispatch<React.SetStateAction<IPessoa[]>> }) {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('00')

    const tudo: any = {
        nome,
        idade
    }
    function Adicionar(e: { preventDefault: () => void }) {
        e.preventDefault()

        setLista(antigas => [...antigas, { ...tudo }])
       
    }

    return (
        <form>
            <input placeholder="digite seu nome" onChange={(e) => setNome(e.target.value)} type="text" name="nome" value={tudo.nome} />

            <button onClick={Adicionar}>Adicionar</button>
        </form>
    )
}