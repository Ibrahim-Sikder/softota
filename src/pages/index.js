"use client";

import Banner from "../../components/Banner/Banner";
import Travel from "../../components/Travel/Travel";
import Customer from "../../components/Customer/Customer";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBarr/Nav";
import TourDestination from "../../components/Tour/TourDestination";

import { Helmet } from "react-helmet-async";
import Mission from "../../components/Mission/Mission";
import DisCount from "../../components/DisCount/DisCount";

export const config = {
  unstable_runtimeJS: false,
};

export default function Home() {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || Flight </title>
      </Helmet>
      <Banner></Banner>
      <TourDestination></TourDestination>
      <DisCount />
      <Travel></Travel>
      <Mission />
      <Customer></Customer>
    </section>
  );
}
