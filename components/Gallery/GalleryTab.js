import React, {useState} from 'react';
import {GalleryTabStyled} from "./GalleryTabStyled";
import {tab_icons} from "./hellpers";
import {motion} from "framer-motion";
import {useStyleContext} from "../../context/style_context";

const GalleryTab = () => {
    const [isActiveTab, setIsActiveTab] = useState(0)
    const {setForMapping} = useStyleContext()

    function setState(index, name) {
        setIsActiveTab(index)
        setForMapping(name)
    }

    return (
        <GalleryTabStyled isActiveTab={isActiveTab}>
            {tab_icons.map((icon, index )=> {
                return (
                    <motion.div
                        whileTap={{scale: .95}}
                        onClick={() => setState(index, icon.mapping_name)}
                         key={index}
                         className={isActiveTab === index ? 'icon-box active-tab' : 'icon-box'}>
                        <p className={isActiveTab === index ? 'icon-text active-text' : 'icon-text'}>{icon.name}</p>
                    </motion.div>
                )
            })}
        </GalleryTabStyled>
    );
};

export default GalleryTab;