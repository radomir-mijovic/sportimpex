import React from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Image from "next/image";
import Link from "next/link";
import {navbar_links} from "./navbar_links";
import MenuButton from "../MenuButton/MenuButton";
import Sidebar from "../Sidebar/Sidebar";
import {useStyleContext} from "../../context/style_context";

const Navbar = () => {
    const {isSidebar, isActive, setIsActive} = useStyleContext()

    return (
        <>
            <NavbarStyled>
                <Image src='/sportimpex_logo.svg'
                       height={'100'}
                       width={'170'}
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
            <MenuButton/>
            {isSidebar && <Sidebar/>}
        </>
    );
};

export default Navbar;