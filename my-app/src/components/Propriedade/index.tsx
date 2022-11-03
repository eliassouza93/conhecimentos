import style from './Propriedade.module.scss'

export default function Propriedade ({tarefa, tempo}:{tarefa:string, tempo:string}) {

    return(
        <div>
           <li >
               <li> {tarefa} </li>
               <li> {tempo} </li>
           </li>
        </div>

    )
}
