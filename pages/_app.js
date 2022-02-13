import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {AnimatePresence} from "framer-motion";
import Footer from "../components/Footer/Footer";
import {Router} from "next/router";
import {useEffect, useState} from "react";
import LoadingLogo from "../components/LoadingLogo/LoadingLogo";


function MyApp({Component, pageProps}) {
    const [isLoadingPage, setIsLoadingPage] = useState(true)

    useEffect(() => {
        document.body.scroll({
            top: 1,
            left: 0,
            behavior: 'smooth'
        })

        setTimeout(() => {
            setIsLoadingPage(false)
        }, 3300)
    }, [])

    // Router.events.on('routeChangeStart', () => {
    //     setIsLoadingPage(true)
    // })
    //
    // Router.events.on('routeChangeComplete', () => {
    //     setTimeout(() => {
    //         setIsLoadingPage(false)
    //     }, 1500)
    // })

    return (
        <StyleProvider>
            <GlobalStyles/>
            <AnimatePresence>
                {isLoadingPage && <LoadingLogo/>}
            </AnimatePresence>
            <Navbar/>
            <Component {...pageProps} />
            <Footer/>
        </StyleProvider>
    )

}

export default MyApp
