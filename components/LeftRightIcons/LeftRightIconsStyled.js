import styled from "styled-components";

export const LeftRightIconsStyled = styled.div`
  width: 9rem;
  height: 4rem;
  position: absolute;
  right: 20%;
  bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  z-index: 5;
  
  .right-icon,
  .left-icon {
    border: 1px solid #E2001A;
    cursor: pointer;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 1rem;
    display: flex;
    align-items: center;

    @media (hover: hover) {
      :hover {
        background: transparent;
      }
    }
  }
`