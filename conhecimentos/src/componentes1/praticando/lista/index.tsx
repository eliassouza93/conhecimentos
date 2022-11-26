import Item from "./item"

interface ILista {
    nome: string
    idade: number
}

export default function Lista({ setLista }: { setLista: ILista[] }) {
    return (
        <div>

            {setLista.map((todosProps, index) => (
                <div key={index}>
                    <Item key={index}
                        {...todosProps}
                    />
                </div>
            ))}

        </div>
    )
}