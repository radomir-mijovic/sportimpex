import React from 'react';
import {MainGalleryStyled} from "./MainGalleryStyled";
import {CloudinaryContext} from "cloudinary-react";
import {Image} from "cloudinary-react";
import {schools_pic_urls} from "./images_urls";
// import Image from "next/image";

const MainGallery = () => {
    return (
        <MainGalleryStyled>
            <CloudinaryContext className='inner-wrapper' cloudName="duzxlv6zf">
                {schools_pic_urls.map(image => {
                    const {id, src} = image;
                    return (
                        <Image key={id} publicId={src} width="300" height="250" alt='image'/>
                    )
                })}
            </CloudinaryContext>
        </MainGalleryStyled>
    );
};

export default MainGallery;