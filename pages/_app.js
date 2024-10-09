import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import Head from "next/head";

import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || Fragment;
  const router = useRouter();

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
