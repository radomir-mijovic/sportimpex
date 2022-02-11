import Head from "next/head";
import Banner from "../components/Banner/Banner";
import TraditionSection from "../components/TraditionSection/TraditionSection";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkProgressBar from "../components/WorkProgressBar/WorkProgressBar";
import {useStyleContext} from "../context/style_context";
import {useEffect} from "react";

export default function Home() {
    const {setIsActive, setIsScrollY, setIsWidthMobile} = useStyleContext()


    useEffect(() => {
        setIsActive(0)
        if (document.body.scrollTop > 250) {
            setIsScrollY(true)
        } else {
            setIsScrollY(false)
        }

        function onScroll() {
            if (document.body.scrollTop > 250) {
                setIsScrollY(true)
            } else {
                setIsScrollY(false)
            }
            if (document.body.clientWidth < 801) {
                setIsWidthMobile(true)
            }
        }

        document.body.addEventListener("scroll", onScroll);
        return () => document.body.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Head>
                <title>
                    Sport-impex
                </title>
            </Head>
            <Banner/>
            <TraditionSection/>
            <Portfolio/>
            <WorkProgressBar/>
        </>
    )
}
