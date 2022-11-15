import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import ConsuAPI from 'paginas/API';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConsuAPI />
  </React.StrictMode>
);

