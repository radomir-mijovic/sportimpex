import React from 'react';
import {LinkH2, SidebarStyled} from "./SidebarStyled";
import {AnimatePresence, motion} from "framer-motion";
import {navbar_links} from "../Navbar/navbar_links";
import {useStyleContext} from "../../context/style_context";
import Image from "next/image";

const Sidebar = () => {
    const {
        setIsSidebar,
        isActive,
        setIsActive,
        setIsCloseIcon
    } = useStyleContext()

    function menuHandler(index) {
        setIsActive(index)
        setIsSidebar(false)
        setIsCloseIcon(prev => !prev)
    }

    return (
        <AnimatePresence>
            <SidebarStyled
                initial={{x: '-100%', opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: .5}}
                exit={{x: '100%', opacity: 0}}
                as={motion.div}>
                {navbar_links.map((item, index) => {
                    return (
                            <LinkH2
                                key={index}
                                isActive={isActive}
                                index={index}
                                onClick={() => menuHandler(index)}>
                                {/*<Image src='/icons/gallery-icon2.gif' alt='gallery' width='50' height='50'/>*/}
                               {item.title}
                            </LinkH2>
                    )
                })}
            </SidebarStyled>
        </AnimatePresence>
    );
};

export default Sidebar;