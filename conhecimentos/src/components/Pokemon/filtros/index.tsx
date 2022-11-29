import axios from 'axios'
import { useEffect, useState } from 'react'
import db from './db.json'
import Itens from './itens'

interface IFiltros {
    id: number
    nome: string
    descricao: string | null
    preco: number
    categoria_id: number

}

export default function Filtros11() {
    const [itens, setItens] = useState([])


    const produtos: IFiltros[] = [
        {
            "id": 1,
            "nome": "Hambúrguer",
            "descricao": "Pão, bife de hambúrguer 90g, salada e batata.",
            "preco": 8.5,
            "categoria_id": 1
        },
        {
            "id": 2,
            "nome": "X-Búrguer",
            "descricao": "Pão, bife de hambúrguer 90g, 1 fatia de queijo, salada e batata.",
            "preco": 10.5,
            "categoria_id": 1
        },
        {
            "id": 3,
            "nome": "X-Bacon",
            "descricao": "Pão, bife de hambúrguer 90g, 1 fatia de queijo, 2 fatia de bacon, salada e batata.",
            "preco": 12.5,
            "categoria_id": 1
        },
        {
            "id": 4,
            "nome": "X-Tudo",
            "descricao": "Pão, 2 bifes de hambúrguer 90g, 2 fatias de queijo, 4 fatias de bacon, salada e batata.",
            "preco": 14.5,
            "categoria_id": 1
        },
        {
            "id": 5,
            "nome": "Coca cola 350ml",
            "descricao": "",
            "preco": 5.5,
            "categoria_id": 2
        },
        {
            "id": 6,
            "nome": "Coca cola 600ml",
            "descricao": "",
            "preco": 7.5,
            "categoria_id": 2
        }


    ]
    useEffect(() => {

    })

    return (
        <div>
            <h1>Banco de dados Json</h1>

            {produtos.map((user, index) => (
                <div key={index}>
                    <Itens key={index}
                        {...user}
                    />

                </div>
            ))}

        </div>
    )
}