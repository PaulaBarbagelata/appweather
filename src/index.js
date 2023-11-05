import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Weather from "./Weather"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<Weather />

    <App />

  
    This project was coded by Paula Barbagelata, and it is <a className="social-link" href="https://github.com/PaulaBarbagelata/appweather">
open sourced</a>
  </React.StrictMode>
);


reportWebVitals();
