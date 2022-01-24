import styled from "styled-components";

export const SectionContainerStyled = styled.section`
  width: 100vw;
  height: auto;
  background: #FFF;
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

  @media (max-width: 800px) {
    padding: 5%;
  }
`