import "../styles/globals.css";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../../components/Layout/Layout";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useEffect } from "react";
import style from '../../src/styles/globals.css'
export default function App({ Component, pageProps: { ...pageProps } }) {

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
    <Layout>
        <Loading/>
          <Component {...pageProps} />
        </Layout>
    </HelmetProvider>
    {/* <div className="chatbox">
        <iframe className={style.chatBox}  src="https://app.chatsimple.ai/iframe23/6ffdd3e6-23c8-447d-895d-cdcc660d25d3/1df0dbdd-5a7d-4466-aef4-0490dc89da58/a557f4df-16a8-448b-bb0c-2e599a3ee69d" height="400" width="800" title="Chatsimple" ></iframe>
      </div> */}
   
   </>
  );
}
