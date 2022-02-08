import styled from "styled-components";
import {motion} from "framer-motion";

export const LoadingLogoStyled = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: black;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;

  #logo path:nth-child(1) {
    stroke-dasharray: 276;
    stroke-dashoffset: 276;
    animation: line-animation 2s ease-in, fill-path-red 1.3s ease 1.7s;
  }

  #logo path:nth-child(2) {
    stroke-dasharray: 206;
    stroke-dashoffset: 206;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(3) {
    stroke-dasharray: 114;
    stroke-dashoffset: 114;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(4) {
    stroke-dasharray: 134;
    stroke-dashoffset: 134;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(5) {
    stroke-dasharray: 123;
    stroke-dashoffset: 123;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(6) {
    stroke-dasharray: 111;
    stroke-dashoffset: 111;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(7) {
    stroke-dasharray: 44;
    stroke-dashoffset: 44;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(8) {
    stroke-dasharray: 58;
    stroke-dashoffset: 58;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(9) {
    stroke-dasharray: 34;
    stroke-dashoffset: 34;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(10) {
    stroke-dasharray: 42;
    stroke-dashoffset: 42;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(11) {
    stroke-dasharray: 125;
    stroke-dashoffset: 125;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(12) {
    stroke-dasharray: 123;
    stroke-dashoffset: 123;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(13) {
    stroke-dasharray: 144;
    stroke-dashoffset: 144;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }

  #logo path:nth-child(14) {
    stroke-dasharray: 102;
    stroke-dashoffset: 102;
    animation: line-animation 2s ease-in, fill-path 1.3s ease 1.7s;
  }
  
  @keyframes line-animation {
    to {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes fill-path {
    from {
      fill: transparent;
    }
    to {
      fill: #B1B3B4;
    }
  }

  @keyframes fill-path-red {
    from {
      fill: transparent;
    }
    to {
      fill: #E2001A;
    }
  }
  
`