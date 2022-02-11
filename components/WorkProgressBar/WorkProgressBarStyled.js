import styled from "styled-components";

export const WorkProgressBarStyled = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 3rem;
  
  .card {
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 3px solid #E2001A;
    
    > svg {
      width: 4rem;
      height: 4rem;
      fill: #E2001A;
    }
  }
  
  @media (max-width: 650px) {
    flex-direction: column;
    margin: 8rem 0;
  }
  
  @keyframes width-animation {
    from {
      width: 10%;
    }
    to {
      width: 100%;
    }
  }
`