import axios from "axios"
import { useEffect, useState } from "react"

export default function Pokemon() {
    const [dados, setDados] = useState<any[]>([])

    useEffect(() => {
        axios.get(' https://pokeapi.co/api/v2/pokemon/ditto')
            .then((resposta) => {
                setDados(resposta.data.abilities)
            })
    }, [])


    return (
        <div>
            <h1>Consumindo Pokemon API</h1>
            {dados.map((exibe, index) => (
                <div key={index} >
                    <h4> {exibe.ability.name} </h4>
                    
                </div>
            ))}

        </div>
    )
}