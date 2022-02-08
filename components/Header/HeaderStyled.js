import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: auto;
  display: flex;
  align-items: start;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  z-index: 5;
  position: absolute;
  padding-left: 15%;
  top: clamp(40%, 30vw, 45%);
  
  .header__h2 {
    font-size: clamp(1.6rem, 4vw, 2rem);
    font-weight: 300;
    color: #FFF;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  .header__h1 {
    font-size: clamp(4.2rem, 4vw, 8rem);
    text-transform: uppercase;
    color: #FFFF;
    letter-spacing: 3px;
    font-weight: 600;
    line-height: 120%;
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .header__h1-empty {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.strokeColor};
  }
  
  @media (max-width: 800px) {
    padding-left: 5%;
  }
`

export const HeaderButton = styled.button`
  border: 1.5px solid #E2001A;
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #FFFF;
  background: transparent;
  padding: 1rem 2rem;
  cursor: pointer;
  outline: none;
  width: 12rem;
  box-shadow: ${props => props.isActiveButton ? 'inset 12rem 0 0 0 #E2001A' : undefined};

  @media (hover: hover) {
    :hover {
      box-shadow: inset 12rem 0 0 0 #E2001A;
    }
  }
`