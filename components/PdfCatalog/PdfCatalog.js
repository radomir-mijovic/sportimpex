import React, {useEffect, useRef} from 'react';
import {PdfCatalogStyled} from "./PdfCatalogStyled";

const PdfCatalog = () => {
    const viewer = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
                {
                    path: '/',
                    initialDoc: '/pdf/new_sportImpex_bez_cena.pdf',
                },
                viewer.current
            ).then((instance) => {
                const {docViewer} = instance;
                // you can now call WebViewer APIs here...
            });
        });
    }, []);

    return (
        <PdfCatalogStyled ref={viewer}/>
    );
};

export default PdfCatalog;