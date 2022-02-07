import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {AnimatePresence} from "framer-motion";
import Footer from "../components/Footer/Footer";

function MyApp({Component, pageProps}) {
    return (
        // <AnimatePresence>
            <StyleProvider>
                <GlobalStyles/>
                <Navbar/>
                <Component {...pageProps} />
                <Footer/>
            </StyleProvider>
        // </AnimatePresence>
    )

}

export default MyApp
