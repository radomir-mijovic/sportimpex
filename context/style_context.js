import React, {useContext, useState} from "react";

const StyleContext = React.createContext()

export const StyleProvider = ({children}) => {
    const [isSidebar, setIsSidebar] = useState(false)
    const [isActive, setIsActive] = useState(0)
    const [isCloseIcon, setIsCloseIcon] = useState(false)

    return (
        <StyleContext.Provider value={{
            isSidebar,
            setIsSidebar,
            isActive,
            setIsActive,
            isCloseIcon,
            setIsCloseIcon
        }}>
            {children}
        </StyleContext.Provider>
    )
}

export const useStyleContext = () => useContext(StyleContext)
