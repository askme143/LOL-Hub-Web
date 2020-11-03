import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Routes from './Routes';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Wemakeprice-Bold';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Wemakeprice-Bold.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
