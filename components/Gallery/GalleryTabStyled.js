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
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    border: 1px solid #E2001A;
    border-radius: 5px;
    transition: background-color .4s ease-in-out;

    > p {
      margin-bottom: 0;
      transition: color .4s ease-in-out;
      font-size: 1.6rem;
    }
  }

  .icon-text {
    color: black;
  }

  .active-tab {
    background: #E2001A;
  }
  
  .active-text {
    color: white;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(7, 1fr);
    margin-top: 12rem;
    margin-bottom: 0;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 1rem;
  }
`