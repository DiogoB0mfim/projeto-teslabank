import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Inter', sans-serif;
    background-color: #F2F4FD;
  }
`;

export default GlobalStyle;
