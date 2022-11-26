

export default function Item({ nome, idade }: { nome: string, idade: number }) {
    return (
        <div>

            <h2>{nome}</h2>
            <h4>{idade}</h4>

        </div>
    )
}