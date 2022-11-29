
interface IPRodutos {
    id_ped: number
    id_unidade: string
    preco_venda: string
    quantidade: string
}
export default function Espalhador({ id_ped,
    id_unidade,
    preco_venda,
    quantidade }: IPRodutos) {
    return (
        <div>

            <ul>
                <li>
                    <li>Nome: {id_ped} </li>
                    <li>Unidade: {id_unidade}</li>
                    <li>Preço venda: {preco_venda}</li>
                    <li>Quantidade: {quantidade}</li>



                </li>
            </ul>


        </div>
    )
}