import React from "react";
import Banner from "../../../components/Banner/Banner";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import TourDestination from "../../../components/Tour/TourDestination";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
import Mission from "../../../components/Mission/Mission";

const index = () => {
  return (
    <section>
      <Helmet>
            <title>Ghuronti || Flight </title>
        </Helmet>
      <Nav />
      <Banner></Banner>
      <TourDestination></TourDestination>
      <Travel></Travel>
      <Mission/>
      <Customer></Customer>
      <Footer />
    </section>
  );
};

export default index;
