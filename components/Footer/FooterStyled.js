import styled from "styled-components";
import {motion} from "framer-motion";

export const FooterStyled = styled.footer`
  width: 100%;
  height: auto;
  background: #1b1b1b;
  position: relative;
  padding: 2rem clamp(3rem, 10vw, 10rem);

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
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid grey;
  }
  
  .social {
    width: 12rem;
    display: flex;
    justify-content: space-between;

    > svg {
      height: 2.5rem;
      width: 2.5rem;
      fill: #FFFF;
      cursor: pointer;
    }
  }
  
  .contact {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 3rem 0;
    
    @media (max-width: 650px) {
      flex-direction: column;
      row-gap: 2.5rem;
    }
  }
  
  .contact-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
    > h2 {
      margin: 1rem 0;
      text-transform: uppercase;
    }
    
    > h2,
    > h3 {
      color: #FFFF;
      font-family: 'Didact Gothic', sans-serif;
    }
    
    > h3 {
      font-size: 1.2rem;
    }
    
    > svg {
      fill: #E2001A;
      height: 3rem;
      width: 3rem;
    }
  }
  
  .rights {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-top: 1px solid grey;
    height: 100%;
    
    > h3 {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: grey;
    }
  }
`

export const ContactButton = styled(motion.button)`
  
`