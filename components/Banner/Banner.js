import React from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";
import Header from "../Header/Header";

const Banner = () => {
    return (
        <BannerStyled>
            <div className="black-opacity"/>
            <Image
                className='banner-img'
                src='/images/banner-1.jpeg'
                layout='fill'
                objectFit='cover'
                quality='100'
                alt='banner-img'/>
            <Header/>
        </BannerStyled>
    );
};

export default Banner;