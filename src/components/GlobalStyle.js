import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html,body,#root{
    
        height:100vh;
        width:100vw;
        font-family 'Kanit',sans-serif;
        font-size:20px;
        scroll-behavior:smooth;

  }

  a{
    text-decoration:none;
    color:#fff;

    
  }

`

export default GlobalStyle;
