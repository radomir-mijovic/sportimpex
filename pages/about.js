import React, {useEffect} from 'react';
import styled from "styled-components";
import {useStyleContext} from "../context/style_context";

const AboutPage = () => {
    const {setIsActive, setIsScrollY} = useStyleContext()

    useEffect(() => {
        setIsActive(1)
        setIsScrollY(true)
    })
    return (
        <PageWrapper>
            About
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  height: 50vh;
  width: 100%;
`

export default AboutPage;