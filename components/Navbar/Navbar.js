import React, {useEffect, useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Image from "next/image";
import Link from "next/link";
import {navbar_links} from "./navbar_links";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {useStyleContext} from "../../context/style_context";
import {AnimatePresence} from "framer-motion";


const Navbar = () => {
    const {isSidebar, isActive, setIsActive} = useStyleContext()
    const [isScrollY, setIsScrollY] = useState(false)
    const [isWidthMobile, setIsWidthMobile] = useState(false)


    useEffect(() => {
        if (document.body.scrollTop > 250) {
            setIsScrollY(true)
        }

        if (window.innerWidth < 801) {
            setIsWidthMobile(true)
        } else {
            setIsWidthMobile(false)
        }

        function onScroll() {
            if (document.body.scrollTop > 250) {
                setIsScrollY(true)
            } else {
                setIsScrollY(false)
            }
            if (document.body.clientWidth < 801) {
                setIsWidthMobile(true)
            }
        }

        document.body.addEventListener("scroll", onScroll);
        return () => document.body.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
            <NavbarStyled isScrollY={isScrollY}>
                <Image src='/sportimpex_logo.svg'
                       height={isWidthMobile ? '60' : '100'}
                       width={isWidthMobile ? '100' : '170'}
                       objectFit='fill'
                       alt='logo'/>
                <ul className='links'>
                    {navbar_links.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={'/'}>
                                    <a onClick={() => setIsActive(index)}
                                       className={isActive === index ? 'active' : undefined}>
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </NavbarStyled>
            <MenuButton isScrollY={isScrollY}/>
            <AnimatePresence>
                {isSidebar && <Sidebar/>}
            </AnimatePresence>
        </>
    );
};

export default Navbar;