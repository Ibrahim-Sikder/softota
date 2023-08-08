import "../styles/globals.css";
import Layout from "../../components/Layout/Layout";


export default function App({
  Component,
  pageProps: {...pageProps },
}) {
  return (
  //   <AuthProvider>
    
  // </AuthProvider>
  
  <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
