import styled from "styled-components";

export const MainGalleryStyled = styled.div`
  width: 100%;
  padding: 0 clamp(1rem, 4vw, 8rem);
  margin-top: 5rem;
  margin-bottom: 8rem;
  
  .inner-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    row-gap: 1rem;
  }
`