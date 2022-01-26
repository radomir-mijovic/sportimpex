import React, {Fragment, useEffect, useState} from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";
import Header from "../Header/Header";
import LeftRightIcons from "../LeftRightIcons/LeftRightIcons";
import {bannerImages} from "./banner_images";
import {AnimatePresence, motion, useAnimation} from "framer-motion";

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
            <AnimatePresence exitBeforeEnter initial={false}>
                {bannerImages.map((image, index) => {
                    return (
                        <Fragment key={index}>
                            {isImage === image.id &&
                            <motion.div
                                // custom={image.id}
                                // animate={controls}
                                initial={{x: 300, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{duration: .7, delay: .3}}
                                exit={{x: 300, opacity: 0}}
                                className='image-wrapper'>
                                <Image
                                    className='banner-img'
                                    src={image.url}
                                    layout='fill'
                                    objectFit='cover'
                                    quality='100'
                                    alt='banner-img'/>
                                <Header image{...image}/>
                            </motion.div>
                            }
                        </Fragment>
                    )
                })}
            </AnimatePresence>
            <LeftRightIcons setIsImage={setIsImage}/>
        </BannerStyled>
    );
};

export default Banner;