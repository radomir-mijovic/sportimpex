import React, {Fragment, useEffect, useState} from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";
import Header from "../Header/Header";
import LeftRightIcons from "../LeftRightIcons/LeftRightIcons";
import {bannerImages} from "./banner_images";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import BannerImage from "./BannerImage";

const Banner = () => {
    const [isImage, setIsImage] = useState(0)
    const controls = useAnimation()

    if (bannerImages.length === isImage) {
        setIsImage(0)
    }
    if (isImage < 0) {
        setIsImage(bannerImages.length - 1)
    }

    // useEffect(() => {
    //     controls.start(image => ({
    //         x: '100%',
    //         transition: {
    //             delay: image * 1
    //         }
    //     }))
    // }, [])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsImage(prevState => prevState + 1)
    //     }, 5000)
    //     return () => clearInterval(interval)
    // })

    return (
        <BannerStyled>
            <div className="black-opacity"/>

                {bannerImages.map((image, index) => {
                    return (
                            <AnimatePresence  key={index}>
                                {isImage === image.id &&
                                <>
                                    <BannerImage image={image}/>
                                    <Header image={image}/>
                                </>
                                }
                            </AnimatePresence>
                    )
                })}

            <LeftRightIcons setIsImage={setIsImage}/>
        </BannerStyled>
    );
};

export default Banner;