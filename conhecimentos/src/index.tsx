import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import LocalStorage from 'components/LocalStorage';








const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LocalStorage />
  </React.StrictMode>
);

