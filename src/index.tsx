import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pokemon from './Pokemon';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Pokemon/>
  </React.StrictMode>
);
