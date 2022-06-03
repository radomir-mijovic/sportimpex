import React, {useContext, useState} from "react";
import {schools_pic_urls} from "../components/Gallery/hellpers";


const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const [isCloseIcon, setIsCloseIcon] = useState(false)
    const [isScrollY, setIsScrollY] = useState(false)
    const [isWidthMobile, setIsWidthMobile] = useState(false)
    const [forMapping, setForMapping] = useState(schools_pic_urls)

    return (
        <StyleContext.Provider value={{
            isSidebar,
            setIsSidebar,
            isActive,
            setIsActive,
            isCloseIcon,
            setIsCloseIcon,
            isScrollY,
            setIsScrollY,
            isWidthMobile,
            setIsWidthMobile,
            forMapping,
            setForMapping
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)
