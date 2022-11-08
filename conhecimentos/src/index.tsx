import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import Dados from 'components/Dados';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Dados />
  </React.StrictMode>
);

