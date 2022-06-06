import styled from "styled-components";

export const GalleryTabStyled = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 15rem;
  margin-bottom: 5rem;
  display: grid;
  grid-template-columns: repeat(7, 15rem);
  column-gap: 1rem;
  padding: 0 clamp(.2rem, 2vw, 8rem);
  justify-content: center;

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    position: relative;
    z-index: 4;

    ::after {
      content: "";
      position: absolute;
      border: 2px solid black;
      //border-left: 2px solid black;
      //border-right: 2px solid black;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      left: 0;
      bottom: 0;
      z-index: -1;
      transform: translate(-3px, -3px);
    }

    ::before {
      content: "";
      position: absolute;
      border: 2px solid black;
      //border-top: 2px solid black;
      //border-bottom: 2px solid black;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      left: 0;
      bottom: 0;
      z-index: -1;
      transform: translate(3px, 3px);
    }

    > p {
      margin-bottom: 0;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  .icon-text {
    color: black;
  }

  .active-tab {
    border: none;
    
    ::after {
      border: 2px solid #E2001A;
      animation: scale-widthY;
      animation-duration: .7s;
    }

    ::before {
      border: 2px solid #E2001A;
      animation: scale-widthX;
      animation-duration: .7s;
      animation-direction: reverse;
    }
  }
  
  //.active-text {
  //  color: black;
  //}

  @media (max-width: 1200px) {
    display: flex;
    margin-top: 12rem;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    display: flex;
    overflow-x: auto;
    //row-gap: 1rem;
    padding: 0 1rem;
    justify-content: left;
    ::-webkit-scrollbar {
      display: none;
      height: 0;
    }
    
    .icon-box {
      min-width: 10rem;
      height: 4rem;
    }
  }

  @keyframes scale-widthY {
    0% {
      transform: scaleY(1);
      opacity: 1;
    }
    50% {
      transform: scaleY(40%);
      opacity: 0;
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  @keyframes scale-widthX {
    0% {
      transform: scaleX(1);
      opacity: 1;
    }
    50% {
      transform: scaleX(30%);
      opacity: 0;
      }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }
`