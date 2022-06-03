import React from 'react';
import {MainGalleryStyled} from "./MainGalleryStyled";
import {CloudinaryContext} from "cloudinary-react";
import {Image} from "cloudinary-react";
import {useStyleContext} from "../../context/style_context";

const MainGallery = () => {
    const {forMapping} = useStyleContext()

    return (
        <MainGalleryStyled>
            <CloudinaryContext className='inner-wrapper' cloudName="duzxlv6zf">
                {forMapping.map(image => {
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