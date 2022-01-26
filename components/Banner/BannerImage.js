import React from 'react';
import {BannerImageStyled} from "./BannerImageStyled";
import Image from "next/image";

const BannerImage = ({image}) => {

    return (
            <BannerImageStyled
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