import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: fixed;
  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 0 clamp(5rem, 7vw, 15rem);
  background: ${props => props.isScrollY ? '#1b1b1b' : 'transparent'};
  transition: background-color .4s ease-in-out;

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

      :hover::after {
        content: '';
        position: absolute;
        width: 100%;
        display: block;
        border-bottom: 2px solid #E2001A;
        bottom: -.5rem;
        margin: inherit;
        animation: grow-width;
        animation-duration: .7s;
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
  
  @media (max-width: 800px) {
    padding: 0 5%;
    
    .links {
      display: none;
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

`