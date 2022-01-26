import React from 'react';
import {BannerImageStyled} from "./BannerImageStyled";
import Image from "next/image";

const BannerImage = ({image, setIsImageIndex}) => {

    function handleDrag(event, info) {
        event.preventDefault()
        if (info.delta.x > 0) {
            setIsImageIndex(prevState => prevState - 1)
        }
        if (info.delta.x < 0) {
            setIsImageIndex(prevState => prevState + 1)
        }
    }

    return (
        <BannerImageStyled
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ type: "spring", stiffness: 20, duration: 2 }}
            drag='x'
            dragConstraints={{left: 0, right: 0}}
            dragElastic={0.2}
            draggable={true}
            onDragEnd={(event, info) => handleDrag(event, info)}
            className='image-wrapper'>
            <Image
                className='banner-img'
                src={image.url}
                layout='fill'
                objectFit='cover'
                quality='100'
                alt='banner-img'/>
        </BannerImageStyled>
    );
};

export default BannerImage;