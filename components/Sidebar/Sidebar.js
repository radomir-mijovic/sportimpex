import React from 'react';
import {LinkH2, SidebarStyled} from "./SidebarStyled";
import {motion} from "framer-motion";
import {navbar_links} from "../Navbar/navbar_links";
import {useStyleContext} from "../../context/style_context";
import Link from 'next/link'

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
                }
            }}>
            {navbar_links.map((item, i) => {
                return (
                    <Link key={i} href={item.href} passHref>
                        <motion.li
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
                    </Link>
                )
            })}
        </SidebarStyled>
    );
};

export default Sidebar;