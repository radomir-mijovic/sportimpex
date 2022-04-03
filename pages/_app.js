import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {AnimatePresence} from "framer-motion";
import Footer from "../components/Footer/Footer";
import {Router} from "next/router";
import {useEffect, useState} from "react";
import LoadingLogo from "../components/LoadingLogo/LoadingLogo";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        '0': '#E2001A',
        '1': '#E2001A'
    }
})


function MyApp({Component, pageProps}) {
    const [isLoadingPage, setIsLoadingPage] = useState(true)
    const [isRouteChange, setIsRouteChange] = useState(false)

    useEffect(() => {
        document.body.scroll({
            top: 1,
            left: 0,
            behavior: 'smooth'
        })

        setTimeout(() => {
            setIsLoadingPage(false)
        }, 3000)
    }, [])

    Router.events.on('routeChangeStart', () => {
        setIsRouteChange(true)
    })

    Router.events.on('routeChangeComplete', () => {
        setIsRouteChange(false)
    })

    return (
        <StyleProvider>
            <GlobalStyles/>
            <AnimatePresence>
                {isLoadingPage && <LoadingLogo/>}
            </AnimatePresence>
            <Navbar/>
            {isRouteChange && <TopBarProgress/>}
            <Component {...pageProps} />
            <Footer/>
        </StyleProvider>
    )
}

export default MyApp
