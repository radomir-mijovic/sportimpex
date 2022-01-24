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
    -webkit-tap-highlight-color: transparent;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  p {
    font-family: 'Didact Gothic', sans-serif;
    font-size: 1.6rem;
    color: #888;
    line-height: 1.75em;
    margin-bottom: 2rem;
  }
`

export const MainH1 = styled.h1`
  color: #1b1b1b;
  text-transform: uppercase;
  font-size: clamp(3.5rem, 4vw, 5rem);
  font-weight: 500;
  letter-spacing: 3px;
  line-height: 1.25em;
`

export const MainH2 = styled.h2`
  color: #E2001A;
  text-transform: uppercase;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`

