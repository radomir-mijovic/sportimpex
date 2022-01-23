import React from 'react';
import {MenuButtonStyled} from "./MenuButtonStyled";
import {useStyleContext} from "../../context/style_context";

const MenuButton = ({isScrollY}) => {
    const {setIsSidebar, isCloseIcon, setIsCloseIcon} = useStyleContext()

    function menuHandler() {
        setIsCloseIcon(prev => !prev)
        setIsSidebar(prev => !prev)
    }

    return (
        <MenuButtonStyled
            isScrollY={isScrollY}
            onClick={menuHandler}>
            <div className={isCloseIcon ? 'menu-icon menu-active' : 'menu-icon'}/>
        </MenuButtonStyled>
    );
};

export default MenuButton;