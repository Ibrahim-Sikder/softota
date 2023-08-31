import "../styles/globals.css";
import Layout from "../../components/Layout/Layout";
import AuthProvider from "@/Provider/AuthProvider";

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
