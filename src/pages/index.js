"use client";

import Customer from "../../components/Customer/Customer";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBarr/Nav";

import { Helmet } from "react-helmet-async";
import Umra from "../../components/Umra/Umra";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || Flight </title>
      </Helmet>
      <Nav />
      <Umra></Umra>
      <Customer/>
      <Footer />
    </section>
  );
}
