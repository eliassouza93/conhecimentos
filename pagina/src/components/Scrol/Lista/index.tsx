import style from './lista.module.scss'

export default function Lista ({name}:{name:string}) {
    return(
        
        <div className={style.separador}>
          
            <div className={style.lista}> {name} </div>
        </div>
    )
}