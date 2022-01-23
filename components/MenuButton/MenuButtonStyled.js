import styled from "styled-components";

export const MenuButtonStyled = styled.div`

  cursor: pointer;
  background: transparent;
  height: 2.5rem;
  width: 3rem;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 20;
  right: 7%;
  top: ${props => props.isScrollY ? '3%' : '5%'};
  transition: top .4s ease-in-out;
  
  .menu-icon {
    width: 3rem;
    height: .3rem;
    background: #E2001A;
    border-radius: 15px;
    cursor: pointer;
    position: relative;


    &::before,
    &::after {
      content: '';
      background: inherit;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      position: absolute;
      transition: all .4s ease-in;
    }

    &::before {
      top: -1rem;
      left: .7rem;
      transform-origin: left top;
      transform: rotateZ(0deg);
    }

    &::after {
      top: 1rem;
      left: .7rem;
      transform-origin: left bottom;
      transform: rotateZ(0deg);
    }

    @media (min-width: 801px) {
      display: none;
    }
  }

  .menu-active {
    background: transparent;
  }

  .menu-active::before {
    transform: rotateZ(43deg);
    background: #E2001A;
  }

  .menu-active::after {
    background: white;
    transform: rotateZ(-43deg);
    width: 50%;
  }
`