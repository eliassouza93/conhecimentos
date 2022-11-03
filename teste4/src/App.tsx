import React, { useState } from 'react';
import Lista from './components/Lista';
import Botao from './components/Botao';
function App() {

  
  const [nome, setNome ] = useState()



  return (
    <div className="App">

      <form >
          <input   type="text" name='nome' id='nome' onChange={(e) => console.log(e.currentTarget.value)} />

          <button type='submit'>clicar</button>

      </form>


    </div>
  );
}
export default App;
