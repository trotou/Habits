import { createGlobalStyle } from "styled-components";
import { currentColor1, neutralColor } from "./globalStyles";

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 }

 body {
    background: ${neutralColor};
    color:${currentColor1};
    -webkit-font-smoothing: antialiased 
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;
  }
`;
