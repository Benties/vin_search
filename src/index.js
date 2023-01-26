import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VinProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
      <VinProvider>
        <App/>
      </VinProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
