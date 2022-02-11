import Head from "next/head";
import Banner from "../components/Banner/Banner";
import TraditionSection from "../components/TraditionSection/TraditionSection";
import Portfolio from "../components/Portfolio/Portfolio";
import WorkProgressBar from "../components/WorkProgressBar/WorkProgressBar";

export default function Home() {
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
