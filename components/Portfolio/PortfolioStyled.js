import styled from "styled-components";

export const PortfolioStyled = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  grid-template-rows: repeat(4, 1fr);
  position: relative;
  min-height: 130rem;
  margin-top: 2.4rem;


  .card {
    width: 100%;
    height: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px;
    position: relative;
    transition: all .4s;

    :hover {
      box-shadow: #E2001A 0 1px 10px, rgba(0, 0, 0, 0.22) 0 7px 7px;      //transform: scale(1.02);
    }
  }

  .card-1 {
    grid-column: 1 / -1;
  }

  .card-2 {
    grid-column: 1 / 3;
  }

  .card-3 {
    grid-column: 3 / -1;
  }

  .card-4 {
    grid-column: 1 / 5;
  }
  
  .card-5 {
    grid-row: 4 / 5;
    grid-column: 1 / 3;
  }

  .card-6 {
    grid-column: 3 / 5;
  }
  .card-7 {
    grid-column: 5 / -1;
    grid-row:  3 / -1;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
    min-height: 190rem;
    
    .card-1, 
    .card-2,
    .card-3,
    .card-4,
    .card-5,
    .card-6 {
      grid-column: 1 / 2;
    }
    
    .card-7 {
      grid-column: 1 / 2;
      grid-row: span 3;
    }
  }

`