import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import estilo from './Pagina.module.scss'
interface IRestaurante {
    id: number
    nome: string
}
export default function PaginaIndex() {
    const [restaurante, setRestaurante] = useState<IRestaurante[]>([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/restaurantes/')
            .then((resposta) => {
                setRestaurante(resposta.data.results)
            }).catch((erro) => {
                console.log(erro)
            }).finally(() => {
                console.log('Fim')
            })


    }, [])

    return (
        <div className={estilo.module}>
            <h1>Inicio</h1>

            {restaurante.map((unidade, index) => (
                <Fragment key={index}>
                    <li>{unidade.nome}</li>
                </Fragment>
            ))}



        </div>
    )
}