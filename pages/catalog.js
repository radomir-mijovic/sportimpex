import React, {useEffect} from 'react';
import styled from "styled-components";
import {useStyleContext} from "../context/style_context";

const CatalogPage = () => {
    const {setIsActive, setIsScrollY} = useStyleContext()

    useEffect(() => {
        setIsActive(3)
        setIsScrollY(true)
    })
    return (
        <PageWrapper>
            Catalog
        </PageWrapper>
    );
};

const PageWrapper = styled.div`
  height: 50vh;
  width: 100%;
`
export default CatalogPage;