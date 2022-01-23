import {GlobalStyles} from "../styles/GlobalStyles";
import Navbar from "../components/Navbar/Navbar";
import {StyleProvider} from "../context/style_context";
import {AnimatePresence} from "framer-motion";


function MyApp({Component, pageProps}) {
    return (
        <AnimatePresence>
            <StyleProvider>
                <GlobalStyles/>
                <Navbar/>
                <Component {...pageProps} />
            </StyleProvider>
        </AnimatePresence>
    )

}

export default MyApp
