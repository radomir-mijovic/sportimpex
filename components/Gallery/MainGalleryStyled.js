import styled from "styled-components";

export const MainGalleryStyled = styled.div`
  width: 100%;
  padding: 0 clamp(1rem, 4vw, 8rem);
  margin-top: 10rem;
  margin-bottom: 8rem;
  //display: grid;
  //align-items: center;
  //grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  
  .inner-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    justify-items: center;
    row-gap: 1rem;
  }
`