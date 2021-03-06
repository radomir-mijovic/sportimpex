import React from 'react';
import {HeaderButton, HeaderStyled} from "./HeaderStyled";
import {motion} from "framer-motion";

const Header = ({image}) => {

    return (
        <HeaderStyled strokeColor={image.strokeColor}>
            <motion.h2
                initial={{opacity: 0, x: '-50%'}}
                animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .2
                    }
                }}
                className='header__h2'>
                {image.subtitle}
            </motion.h2>
            <motion.h1
                initial={{opacity: 0, y: '50%'}}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .2
                    }
                }}
                className='header__h1'>
                {image.bannerTextMain}
                <br/>
                <span className='header__h1-empty'>
                    {image.bannerText}
                </span>
            </motion.h1>
            <a className='phone' href="mailto:office@sportimpex.co.rs">
            <HeaderButton
                whileTap={{
                    scale: .9,
                    transition: {
                        duration: .2
                    }
                }}
                className={'active'}
                initial={{opacity: 0, y: '40%'}}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1
                    }
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: .2
                    }
                }}
                as={motion.button}>
                Kontakt
            </HeaderButton>
            </a>
        </HeaderStyled>
    );
};

export default Header;