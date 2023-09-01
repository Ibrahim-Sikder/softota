import "../styles/globals.css";
import AuthProvider from "@/Provider/AuthProvider";
import { HelmetProvider } from "react-helmet-async";
import Layout from "../../components/Layout/Layout";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </HelmetProvider>
  );
}
