import {Main, Head, Html, NextScript} from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="sportimpex_logo.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap"
                      rel="stylesheet"/>
                <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}