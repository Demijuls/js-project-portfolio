import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
  }

  body {
    max-width: 1440px;
    background-color: white;
  }
`;

export default GlobalStyle;
