import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import AmbienteLista from 'components/AmbienteLista';




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AmbienteLista />
  </React.StrictMode>
);

