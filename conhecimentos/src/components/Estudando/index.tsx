import { useState } from "react"




export default function (){


    const [nome, setNome]  = useState(0)

    function conta () {
        setNome(nome +1)
    }
    
    return(
        <div>
            <button onClick={conta}>adicionar</button>
            <p> {nome} </p>
            
        </div>
    )
}