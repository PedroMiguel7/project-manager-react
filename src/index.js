import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { c } from 'styled-components';
import GlobalStyles from "./styles/global"
import App from  './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);
