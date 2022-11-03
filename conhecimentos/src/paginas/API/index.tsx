import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import style from './Consu.module.scss'
interface IBGE {
 
    nome: string
   
}

export default function ConsuAPI() {

    const [data, setData] = useState<IBGE[]  >([])

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v2/censos/nomes/  ')
            .then(resposta => {
                setData(resposta.data )
            }).catch((erro) =>{
                console.log(erro)
            })

    }, [])

    return (
        <div className={style.module}>
            {data.map((user: any, index) => (
               <div key={index}> <h2>{user.nome}</h2>  <h5>{user.rank}</h5>  </div>
                
            ))}
        </div>
    )
}