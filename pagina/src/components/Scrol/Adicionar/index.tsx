
import { useState } from 'react'
import style from './adicionar.module.scss'
export default function Adicionar() {

    
const  [nome, setNome] = useState()
const  [mensagem, setMensagem] = useState()

function usuario (evento: { preventDefault: () => void }) {
  evento.preventDefault()
    
}

    return (
        <div >
            <form onSubmit={usuario} className={style.container}>
                <div className={style.nome}>
                    <label htmlFor="">Nome</label>
                    <input type="text"name='nome'  placeholder='digíte seu nome' />
                </div>
                <div className={style.mensagem}>
                    <label htmlFor="">Mensagem</label>
                    <input className={style.mensagem_input} type="text"  placeholder='digíte sua mensagem' />
                </div>
                <div className={style.botao} >
                    <button type='submit' className={style.botao_botao}>Enviar</button>
                </div>

            </form>


        </div>
    )
}