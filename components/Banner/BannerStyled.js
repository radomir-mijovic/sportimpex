import styled from "styled-components";

export const BannerStyled = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  
  .black-opacity {
    position: absolute;
    background: rgba(0, 0, 0, .3);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  }
   
  .banner-img {
    z-index: -1;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  
`