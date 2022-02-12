import Document, {Main, Head, Html, NextScript} from "next/document";
import {ServerStyleSheet} from 'styled-components'
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="shortcut icon" href="sportimpex_logo.ico"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
                          rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap"
                          rel="stylesheet"/>
                    <link rel="canonical" href="https://www.sportimpex.co.rs/"/>
                    <meta name="keywords" content="sportimpex, dečija igrališta,školski nameštaj,
                     predškolski nameštaj, sportski rekviziti, oprema za skole, oprema za vrtic"/>
                    <meta name='description' content='Sportimpex, Opremanje Škola i Vrtića. Pogledajte ponudu'/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheet.collectStyles(<App {...props} />),
        })

    const initialProps = await Document.getInitialProps(ctx)
    return {
        ...initialProps,
        styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
        ),
    }

}

export default MyDocument;