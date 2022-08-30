import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GlobalStyles from "./styles/global"
import App from  './App';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={
      window.matchMedia && 
      window.matchMedia('(prefers-color-scheme:light)').matches
      ? lightTheme 
      : darkTheme
  }>
      <App/>
      <GlobalStyles/>
    </ThemeProvider>
  </>
);
