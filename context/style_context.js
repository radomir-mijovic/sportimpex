import React, {useContext, useState} from "react";


const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const [isCloseIcon, setIsCloseIcon] = useState(false)
    const [isScrollY, setIsScrollY] = useState(false)
    const [isWidthMobile, setIsWidthMobile] = useState(false)

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
            setIsWidthMobile
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)
