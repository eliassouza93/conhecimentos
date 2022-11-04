import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import InicioLista from 'components/ListaComProps';






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <InicioLista />
  </React.StrictMode>
);

