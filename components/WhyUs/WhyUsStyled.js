import styled from 'styled-components'

export const WhyUsStyled = styled.main`
  width: 100%;
  height: auto;

  .section-text {
    margin: 3rem 0;
    
    > h3 {
      font-size: 2.4rem;
      font-weight: 400;
    }
  }

  .section-header-text {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    grid-gap: .5rem;
    margin: 2rem 0;
  }

  .red-dash {
    color: #E2001A;
  }

  @media (max-width: 650px) {
    margin: 8rem 0;
  }
`