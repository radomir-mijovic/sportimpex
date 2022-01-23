import React from 'react';
import {LinkH2, SidebarStyled} from "./SidebarStyled";
import {AnimatePresence, motion} from "framer-motion";
import {navbar_links} from "../Navbar/navbar_links";
import {useStyleContext} from "../../context/style_context";

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
                exit={{x: '-100%', opacity: 0}}
                as={motion.div}>
                {navbar_links.map((item, index) => {
                    return (
                        <div key={index} className='link'>
                            <LinkH2
                                isActive={isActive}
                                index={index}
                                onClick={() => menuHandler(index)}>
                                0{index} {item.title}
                            </LinkH2>
                        </div>
                    )
                })}
            </SidebarStyled>
        </AnimatePresence>
    );
};

export default Sidebar;