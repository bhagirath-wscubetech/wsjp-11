import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Index from './Context/Index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index>
      <App />
    </Index>
  </React.StrictMode>
);
