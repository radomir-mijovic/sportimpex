import React, {useState} from 'react';
import {HeaderButton, HeaderStyled} from "./HeaderStyled";
import {motion} from "framer-motion";

const Header = ({image}) => {
    const [isActiveButton, setIsActiveButton] = useState(false)

    return (
        <HeaderStyled strokeColor={image.strokeColor}>
            <motion.h2
                initial={{opacity: 0, x: '-50%'}}
                animate={{opacity: 1, x: 0,transition: {
                    duration: 1
                }}}
                exit={{opacity: 0, transition: {
                    duration: .2
                    }}}
                className='header__h2'>
                Dobrodošli u Sportimpex
            </motion.h2>
            <motion.h1
                initial={{opacity: 0, y: '50%'}}
                animate={{opacity: 1, y: 0, transition: {
                        duration: 1
                    }}}
                exit={{opacity: 0, transition: {
                        duration: .2
                    }}}
                className='header__h1'>
                {image.bannerTextMain} <br/> <span className='header__h1-empty'>{image.bannerText}</span>
            </motion.h1>
            <HeaderButton
                // isActiveButton={isActiveButton}
                // onMouseEnter={() => setIsActiveButton(true)}
                whileHover={{scale: 1.05, transition: {
                    duration: .2
                    }}}
                whileTap={{scale: .95, transition: {
                        duration: .2
                    }}}
                className={'active'}
                initial={{opacity: 0,  y: '40%'}}
                animate={{opacity: 1, y: 0, transition: {
                        duration: 1
                    }}}
                exit={{opacity: 0, transition: {
                        duration: .2
                    }}}
                as={motion.button}>
                O Nama
            </HeaderButton>
        </HeaderStyled>
    );
};

export default Header;