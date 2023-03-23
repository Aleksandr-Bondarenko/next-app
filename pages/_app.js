import Head from "next/head";
import Layout from "../components/Layout";
import PageLoader from "../components/PageLoader";
import "../styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Head>
      <Layout>
        <PageLoader />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
