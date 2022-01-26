import React from 'react';
import {LeftRightIconsStyled} from "./LeftRightIconsStyled";
import Image from "next/image";
import {motion} from "framer-motion";

const LeftRightIcons = ({setIsImageIndex}) => {

    return (
        <LeftRightIconsStyled>
            <motion.div
                onClick={() => setIsImageIndex(prevState => prevState - 1)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="left-icon">
                <Image
                    width='20'
                    height='20'
                    src="/icons/icon-left.svg"
                    alt="icon left"/>
            </motion.div>
            <motion.div
                onClick={() => setIsImageIndex(prevState => prevState + 1)}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                ransition={{duration: 1}}
                className="right-icon">
                <Image
                    width='20'
                    height='20'
                    src="/icons/icon-right.svg"
                    alt="icon right"/>
            </motion.div>
        </LeftRightIconsStyled>
    );
};

export default LeftRightIcons;