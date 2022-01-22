import React from 'react';
import {LeftRightIconsStyled} from "./LeftRightIconsStyled";
import Image from "next/image";
import {motion} from "framer-motion";

const LeftRightIcons = () => {
    return (
        <LeftRightIconsStyled>
            <motion.div
                whileTap={{scale: .9}}
                transition={{duration: .1}}
                className="left-icon">
                <Image
                    width='20'
                    height='20'
                    src="/icons/icon-left.svg"
                    alt="icon left"/>
            </motion.div>
            <motion.div
                whileTap={{scale: .9}}
                className="right-icon">
                <Image
                    width='20'
                    height='20'
                    src="/icons/icon-right.svg"
                    alt="icon left"/>
            </motion.div>
        </LeftRightIconsStyled>
    );
};

export default LeftRightIcons;