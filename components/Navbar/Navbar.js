import React, {useEffect} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Image from "next/image";
import Link from "next/link";
import {navbar_links} from "./navbar_links";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {useStyleContext} from "../../context/style_context";
import {AnimatePresence} from "framer-motion";
import {useRouter} from "next/router";


const Navbar = () => {
    const {
        isSidebar,
        isActive,
        setIsActive,
        isScrollY,
        isWidthMobile,
        setIsWidthMobile
    } = useStyleContext()

    const router = useRouter()

    function toHome() {
        router.push('/')
    }

    useEffect(() => {
        if (window.innerWidth < 801) {
            setIsWidthMobile(true)
        } else {
            setIsWidthMobile(false)
        }
    });


    return (
        <>
            <NavbarStyled isScrollY={isScrollY}>
                <Image onClick={toHome}
                       className='nav-logo'
                       src='/sportimpex_logo.svg'
                       height={isWidthMobile ? '60' : '100'}
                       width={isWidthMobile ? '100' : '170'}
                       objectFit='fill'
                       alt='logo'/>
                <ul className='links'>
                    {navbar_links.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link href={item.href}>
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