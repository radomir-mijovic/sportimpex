import styled from "styled-components";

export const TraditionSectionStyled = styled.section`
  width: 100vw;
  height: auto;
  background: #F7F6F6;
  padding: 10rem 15%;
  position: relative;
  
  ::before {
    content: "";
    width: 1.5px;
    height: 10rem;
    background: #E2001A;
    position: absolute;
    top: -5rem;
    left: 50%;
    margin: 0 auto;
  }
  
  .tradition-card {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
  }
  
  .text {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
    
    > h2 {
      font-size: 2.5rem;
      font-weight: 300;
      color: #1b1b1b;
      margin-bottom: 2.4rem;
    }
  }
  
  .red-line {
    width: 10%;
    height: 1px;
    background: #E2001A;
  }
  
  @media (max-width: 800px) {
    padding: 5%;

    .tradition-card {
      grid-template-columns: 1fr;
    }
  }
`