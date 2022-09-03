// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Css
import './index.css';

// Import App
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>
);
