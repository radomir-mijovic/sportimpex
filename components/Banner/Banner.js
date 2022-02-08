import React, {useEffect, useState} from 'react';
import {BannerStyled} from "./BannerStyled";
import Header from "../Header/Header";
import LeftRightIcons from "../LeftRightIcons/LeftRightIcons";
import {bannerImages} from "./banner_images";
import {AnimatePresence} from "framer-motion";
import BannerImage from "./BannerImage";
import {wrap} from "@popmotion/popcorn";

const Banner = () => {
    const [isImageIndex, setIsImageIndex] = useState(0)

    const imageIndex = wrap(0, bannerImages.length, isImageIndex)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImageIndex(prevState => prevState + 1)
        }, 8000)
        return () => clearInterval(interval)
    })

    return (
        <BannerStyled>
            <div className="black-opacity"/>
            {bannerImages.map((image, index) => {
                return (
                    <AnimatePresence exitBeforeEnter key={index}>
                        {imageIndex === image.id &&
                        <>
                            <BannerImage
                                key={index}
                                setIsImageIndex={setIsImageIndex}
                                image={image}/>
                            <Header image={image}/>
                        </>
                        }
                    </AnimatePresence>
                )
            })}
            <LeftRightIcons setIsImageIndex={setIsImageIndex}/>
        </BannerStyled>
    );
};

export default Banner;