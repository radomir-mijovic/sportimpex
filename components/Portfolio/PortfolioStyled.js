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
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    overflow-x: hidden;

    > h4 {
      color: #fff3f3;
      font-size: clamp(1.6rem, 1vw, 2.5rem);
      text-transform: uppercase;
      font-weight: 400;
      letter-spacing: 3px;
      padding: 1rem 2.4rem;
      z-index: 3;
      background: rgba(0, 0, 0, .4);
      margin-bottom: 1rem;
      margin-right: 1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      border: 1px solid #E2001A;

      > span {
        font-weight: 300;
      }

      > svg {
        margin-left: 1rem;
        height: 100%;
        transition: all .5s ease;
        transform-origin: center;
      }
      
      :hover {
        
        > svg {
          fill: #E2001A;
          transform: scale(1.3) translateX(.7rem);
        }
      }
    }
  }

  .red-overlay {
    background: linear-gradient(to left, #E2001A 50%, #de402c 50%) right;
    background-size: 200%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 1s;
    opacity: 1;
  }

  .hidden {
    opacity: 0;
  }

  .card-h1 {
    color: #FFFF;
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: clamp(1.6rem, 2vw, 2.5rem);

    //::before {
    //  content: "";
    //  height: 1.5px;
    //  background: #E2001A;
    //  transition: all 1s;
    //  width: revert;
    //  animation: grow-width-from-right;
    //  animation-duration: 1.4s;
    //}

    ::after {
      content: "";
      height: 1.5px;
      background: #FFFF;
      animation: grow-width;
      animation-duration: 1.4s;
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
    grid-row: 3 / -1;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
    min-height: 190rem;
    margin-bottom: 5rem;

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

  @keyframes from-top {
    from {
      align-items: start;
    }
    to {
      align-items: center;
    }
  }

  @keyframes grow-width {
    from {
      width: 5%;
    }
    to {
      width: 100%;
    }
  }

  @keyframes grow-width-from-right {
    from {
      right: 5%;
    }
    to {
      background: linear-gradient(to left, #FFFF 50%, salmon 50%) right;
    }
  }
`