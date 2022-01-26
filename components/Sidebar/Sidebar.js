import React from 'react';
import {LinkH2, SidebarStyled} from "./SidebarStyled";
import {motion} from "framer-motion";
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

    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * .3,
                type: "spring",
                stiffness: 40
            }
        }),
        hidden: {
            opacity: 0,
            y: '-15%'
        },
    }

    return (
        <SidebarStyled
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .5}}
            exit={{
                opacity: 0,
                x: '-70%',
                transition: {
                    delay: .3,
                    duration: .5
                }}}>
            {navbar_links.map((item, i) => {
                return (
                    <motion.li
                        key={i}
                        custom={i}
                        animate="visible"
                        variants={variants}
                        initial="hidden">
                        <LinkH2
                            isActive={isActive}
                            index={i}
                            onClick={() => menuHandler(i)}>
                            {item.title}
                        </LinkH2>
                    </motion.li>
                )
            })}
        </SidebarStyled>
    );
};

export default Sidebar;