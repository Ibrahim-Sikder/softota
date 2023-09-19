import "../styles/globals.css";
import AuthProvider from "@/Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../../components/Layout/Layout";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";

export default function App({ Component, pageProps: { ...pageProps } }) {
  // const [loading, setLoading] = useState(false)

  // Router.events.on('routeChangeStart', (url)=>{
  //   console.log('Router is changing ')
  //   setLoading(true)
  // })
  // Router.events.on('routeChangeComplete', (url)=>{
  //   console.log('rout changin end ')
  //   setLoading(false)
  // })

  function Loading(){
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
      const handleStart = (url)=>(url !== router.asPath ) && setLoading(true) ;
      const handleComplete = (url)=>(url !== router.asPath ) && setTimeout(()=>{setLoading(false), 5000}, );


      router.events.on("routeChangeStart", handleStart)
      router.events.on("routeChangeComplete", handleComplete)
      router.events.on("routeChangeError", handleComplete)
      return ()=>{
        router.events.off("routeChangeStart", handleStart)
        router.events.off("routeChangeComplete", handleComplete)
        router.events.off("routeChangeError", handleComplete)
      }
    })
    return loading && (<Loader/> )

  }


  return (

   <>
 
  
    <HelmetProvider>
      <AuthProvider>
        <Layout>
        <Loading/>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </HelmetProvider>
   
   </>
  );
}
