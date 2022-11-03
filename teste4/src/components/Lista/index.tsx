import style from './Lista.module.scss'

export default function Lista ({nome,sobrenome}: {nome:string,sobrenome:string}) {
    return(
        <ul className={style.minhaLista}>
            <li>Nome: <span>{nome}</span> </li>
            <li>Sobrenome: <span>{sobrenome}</span> </li>
        </ul>

      
    )
}