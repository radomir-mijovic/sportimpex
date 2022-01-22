import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;
  padding: 0 15%;
  margin-top: 3rem;
  background: transparent;

  .links {
    display: flex;


    > li > a {
      width: 100%;
      color: #FFFF;
      letter-spacing: 3px;
      font-size: 1.9rem;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0 10px;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      position: relative;
      transition: all .3s ease-in-out;

      :hover::after {
        content: '';
        position: absolute;
        width: 100%;
        display: block;
        border-bottom: 2px solid #E2001A;
        bottom: -.5rem;
        margin: inherit;
      }
    }

    .active::after {
      content: '';
      position: absolute;
      width: 100%;
      display: block;
      border-bottom: 2px solid #E2001A;
      bottom: -.5rem;
      margin: inherit;
    }
  }
  
  .nav-logo {
    width: 12rem;
    height: 3rem;
    position: relative;
  }
  
  .icons {
    cursor: pointer;
    background: transparent;
    height: 2.5rem;
    width: 3rem;
    display: flex;
    align-items: center; 
  }
  
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
  
  @media (max-width: 800px) {
    padding: 0 5%;
    margin-top: 1rem;
    
    .links {
      display: none;
    }
  }

`