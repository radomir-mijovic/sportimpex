import styled from "styled-components";
import {motion} from "framer-motion";

export const SidebarStyled = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .9);
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
  margin-bottom: 2rem;
  color: ${props => props.isActive === props.index ? '#E2001A' : '#FFF'};
  display: flex;
  flex-direction: column;
  
  ::after {
    content: "";
    height: 1.5px;
    background: ${props => props.isActive === props.index ? '#E2001A' : '#FFF'};
    animation: grow-width;
    animation-duration: 2s;
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