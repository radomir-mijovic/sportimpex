import React, {useEffect} from 'react';
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";
import {useStyleContext} from "../context/style_context";

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
                <Image
                    width={700}
                    height={500}
                    src='/images/coming-soon.gif'
                    alt='coming soon'/>
            </PageWrapper>

        </>
    );
};

const PageWrapper = styled.div`
  height: 70vh;
  width: 100%;
  display: grid;
  place-items: center;
`

export default GalleryPage;