import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { VinProvider } from './context/vinContext';
import { ThemeProvider } from './context/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <VinProvider>
        <App/>
      </VinProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
