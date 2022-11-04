import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import Relogio from 'components/Tempo';







const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Relogio />
  </React.StrictMode>
);

