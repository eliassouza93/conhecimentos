import style from './scrol.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Lista from './Lista';
import Adicionar from './Adicionar';

export default function Scrol() {
   const [list, setList] =useState([
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
        {id:1, name: 'Rede social', done:false},
   ])



    return (
        <div className={style.container}>
            <header><h2>Rede social</h2></header>
            <p>Seja bem vindo!</p>
            <Adicionar/>

       
            <div className={style.rolagem}>
            {list.map((item,index) => (
                <Lista name={item.name} />
            ))}
           
         
        
            </div>
        </div>
    )
}