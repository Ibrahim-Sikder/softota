import React from "react";
import Tour from "../../../components/Tour/Tour";
import Travel from "../../../components/Travel/Travel";
import TourDestination from "../../../components/Tour/TourDestination";
import Customer from "../../../components/Customer/Customer";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <div>
      <Nav />
      <Tour></Tour>
      <BestPlace></BestPlace>
      <Travel></Travel>
      <TourDestination></TourDestination>
      <Customer></Customer>
      <Footer />
    </div>
  );
};

export default index;
