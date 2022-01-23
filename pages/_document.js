import {Main, Head, Html, NextScript} from "next/document";
import Scroll from "../components/Scroll/Scroll";

export default function Document() {
    return (
        <Html>
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
            </Head>
            <body>
            <Main/>
            <Scroll/>
            <NextScript/>
            </body>
        </Html>
    )
}