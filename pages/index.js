import Head from "next/head";
import Banner from "../components/Banner/Banner";
import TraditionSection from "../components/TraditionSection/TraditionSection";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Sportimpex
                </title>
            </Head>
            <Banner/>
            <TraditionSection/>
            <Portfolio/>
        </>
    )
}
