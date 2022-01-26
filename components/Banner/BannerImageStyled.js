import styled from "styled-components";
import {motion} from "framer-motion";

export const BannerImageStyled = styled(motion.div)`
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;

    .banner-img {
      z-index: -1;
    }
  }
`