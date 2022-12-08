import React from 'react';
import ReactDOM from 'react-dom/client';
import {GlobalStyle} from './style/global'
import App from './page/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


