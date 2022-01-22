import React, {useState} from 'react';
import {NavbarStyled} from "./NavbarStyled";
import Image from "next/image";
import Link from "next/link";
import {navbar_links} from "./navbar_links";

const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const [isCloseIcon, setIsCloseIcon] = useState(false)

    function setActiveClassHandler(index) {
        setIsActive(index)
    }

    return (
        <NavbarStyled>
            <Image src='/sportimpex_logo.svg'
                   height={'100'}
                   width={'170'}
                   objectFit='fill'
                   alt='logo'/>
            <div className="icons" onClick={() => setIsCloseIcon(prev => !prev)}>
                <div className={isCloseIcon ? 'menu-icon menu-active' : 'menu-icon'}/>
            </div>
            <ul className='links'>
                {navbar_links.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link href={'/'}>
                                <a onClick={() => setActiveClassHandler(index)}
                                   className={isActive === index ? 'active' : undefined}>
                                    {item.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </NavbarStyled>
    );
};

export default Navbar;