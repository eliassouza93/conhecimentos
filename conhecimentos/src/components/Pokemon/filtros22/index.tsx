import Espalhador from "./espalhador"

 
export default function LojaSite() {
    const produtos = [
        {nome:'Joao', idade:22, profissao:'Editor de video',telefone:323232323},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988},
        {nome:'Maria', idade:33, profissao:'Designer',telefone:59888988}
    ]

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