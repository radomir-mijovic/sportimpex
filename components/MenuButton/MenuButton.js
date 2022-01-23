import React, {useState} from 'react';
import {MenuButtonStyled} from "./MenuButtonStyled";
import {useStyleContext} from "../../context/style_context";

const MenuButton = () => {
    // const [isCloseIcon, setIsCloseIcon] = useState(false)
    const {setIsSidebar, isCloseIcon, setIsCloseIcon} = useStyleContext()

    function menuHandler() {
        setIsCloseIcon(prev => !prev)
        setIsSidebar(prev => !prev)
    }

    return (
        <MenuButtonStyled onClick={menuHandler}>
            <div className={isCloseIcon ? 'menu-icon menu-active' : 'menu-icon'}/>
        </MenuButtonStyled>
    );
};

export default MenuButton;