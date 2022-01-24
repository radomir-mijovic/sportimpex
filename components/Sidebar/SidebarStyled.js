import styled from "styled-components";

export const SidebarStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .8);
  //background: #E2001A;
  position: absolute;
  z-index: 7;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  @media (min-width: 801px) {
    display: none;
  }
`

export const LinkH2 = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${props => props.isActive === props.index ? '#E2001A' : '#FFF'};
  
  > hr {
    color: ${props => props.isActive === props.index ? '#E2001A' : '#FFF'};
  }
`