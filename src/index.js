import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyles from "./styles/global"
import App from  './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/Theme';
import { ligthTheme } from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={darkTheme}>
      <App/>
      <GlobalStyles/>
    </ThemeProvider>
  </>
);
