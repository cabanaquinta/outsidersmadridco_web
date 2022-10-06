import "../styles/globals.css";
import { SnipcartProvider } from "../src/useSnipcart";
import Layout from "../components/Layout";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

function MyApp({ Component, pageProps }) {
    return (
        <SnipcartProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SnipcartProvider>
    );
}

export default MyApp;
