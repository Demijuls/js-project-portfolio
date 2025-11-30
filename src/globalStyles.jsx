import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0; 
    padding: 0;
  }

  body {
    scroll-behavior: smooth;
    max-width: 1440px;
    background-color: white;
  }

  @media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
`;

export default GlobalStyle;
