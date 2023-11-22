import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from "./service-worker";


const root = ReactDOM.createRoot(document.getElementById('root'));
serviceWorker.register();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
