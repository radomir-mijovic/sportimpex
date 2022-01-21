import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }

  html,body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
  body {
    font-family: "oswald", sans-serif;
    font-weight: 300;

  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }

`

