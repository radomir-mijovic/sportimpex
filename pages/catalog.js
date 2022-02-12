import React, {useEffect} from 'react';
import styled from "styled-components";
import {useStyleContext} from "../context/style_context";
import Head from "next/head";
import Image from "next/image";

const CatalogPage = () => {
    const {setIsActive, setIsScrollY} = useStyleContext()

    useEffect(() => {
        setIsActive(3)
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
                <title>Katalog</title>
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
export default CatalogPage;