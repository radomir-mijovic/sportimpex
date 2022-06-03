import React, {useEffect} from 'react';
import styled from "styled-components";
import Head from "next/head";
import {useStyleContext} from "../context/style_context";
import MainGallery from "../components/Gallery/MainGallery";
import GalleryTab from "../components/Gallery/GalleryTab";

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
                <GalleryTab/>
                <MainGallery/>
            </PageWrapper>

        </>
    );
};

const PageWrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default GalleryPage;