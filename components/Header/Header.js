import React from 'react';
import {HeaderButton, HeaderStyled} from "./HeaderStyled";

const Header = () => {
    return (
        <HeaderStyled>
            <h2 className='header__h2'>
                Dobrodošli u Sportimpex
            </h2>
            <h1 className='header__h1'>
                mi gradimo <br/> <span className='header__h1-empty'>poverenje</span>
            </h1>
            <HeaderButton>
                O Nama
            </HeaderButton>
        </HeaderStyled>
    );
};

export default Header;