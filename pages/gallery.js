import React, {useEffect} from 'react';
import styled from "styled-components";
import Head from "next/head";
import {useStyleContext} from "../context/style_context";
import MainGallery from "../components/Gallery/MainGallery";

const GalleryPage = () => {
    const {setIsActive, setIsScrollY} = useStyleContext()

    useEffect(() => {
        setIsActive(1)
        setIsScrollY(true)

        document.body.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    return (
        <>
            <Head>
                <title>Galerija</title>
            </Head>
            <PageWrapper>
                {/*<Image*/}
                {/*    width={800}*/}
                {/*    height={500}*/}
                {/*    src='/images/924.jpg'*/}
                {/*    alt='coming soon'/>*/}
                <MainGallery/>
            </PageWrapper>

        </>
    );
};

const PageWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default GalleryPage;