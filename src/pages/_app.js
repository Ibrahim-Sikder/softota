import "../styles/globals.css";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../../components/Layout/Layout";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import style from "../../src/styles/globals.css";
import { Toaster } from "react-hot-toast";
import DataProvider from "@/Context/DataContext";

export default function App({ Component, pageProps: { ...pageProps } }) {
  function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const handleStart = (url) => url !== router.asPath && setLoading(true);
      const handleComplete = (url) =>
        url !== router.asPath &&
        setTimeout(() => {
          setLoading(false), 5000;
        });

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
    });
    return loading && <Loader />;
  }

  return (
    <>
      <HelmetProvider>
        <DataProvider>
          <Layout>
            <Loading />
            <Component {...pageProps} />
            <Toaster />
          </Layout>
        </DataProvider>
      </HelmetProvider>

    </>
  );
}
