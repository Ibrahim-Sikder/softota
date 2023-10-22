import Head from "next/head";

export default function Layout({ children }) {

  return (
    <>
    <Head>
      <title> Ghuronti </title>
    </Head>
      <main className="layout">{children}</main>      
    </>
  );
}
