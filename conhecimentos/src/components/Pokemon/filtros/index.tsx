import itens from './itens.json'

interface IFiltros {
    id: number
    nome: string
    descricao: string | null
    preco: number
    categoria_id: number

}
interface Props {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros11( ) {
    return (
        <div>
            <h1>Filtro</h1>
        </div>
    )
}