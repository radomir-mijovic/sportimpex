import React from 'react';
import {BannerStyled} from "./BannerStyled";
import Image from "next/image";
import Header from "../Header/Header";
import LeftRightIcons from "../LeftRightIcons/LeftRightIcons";

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
            <LeftRightIcons/>
        </BannerStyled>
    );
};

export default Banner;