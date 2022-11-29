import Espalhador from "./espalhador"

 
export default function LojaSite() {
    const produtos = [{ "id_ped": -1820157074, "id_unidade": "1", "preco_venda": "41.9", "quantidade": "1" },
    { "id_ped": 33759233, "id_unidade": "1", "preco_venda": "120.55", "quantidade": "1" },
    { "id_ped": 1131745303, "id_unidade": "5", "preco_venda": "13.74", "quantidade": "1" },
    { "id_ped": -211558136, "id_unidade": "5", "preco_venda": "59.9", "quantidade": "1" },
    { "id_ped": 244101855, "id_unidade": "8", "preco_venda": "199.9", "quantidade": "1" },
    { "id_ped": 876261471, "id_unidade": "8", "preco_venda": "749.0", "quantidade": "1" },
    { "id_ped": 1751265617, "id_unidade": "8", "preco_venda": "599.0", "quantidade": "1" },
    { "id_ped": 1968743421, "id_unidade": "8", "preco_venda": "279.9", "quantidade": "1" },
    { "id_ped": -2008429371, "id_unidade": "8", "preco_venda": "207.8", "quantidade": "1" }]

    return (
        <div>

            {produtos.map((user, index) => (
                <div>
                    <Espalhador key={index}
                        {...user}
                    />
                </div>
            ))}

        </div>
    )
}