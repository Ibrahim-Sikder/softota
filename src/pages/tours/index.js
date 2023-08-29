import React, { useEffect, useState } from "react";
import Travel from "../../../components/Travel/Travel";
import Customer from "../../../components/Customer/Customer";
import Tour from "../../../components/Tour/Tour";
import BestPlace from "../../../components/BestPlace/BestPlace";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import TourDestination from "../../../components/Tour/TourDestination";

const TourPage = () => {
  return (
    <section>
      <Nav />
      <Tour></Tour>
      <TourDestination/>
      <BestPlace></BestPlace>
      <div className="mb-10">
        <Travel></Travel>
      </div>
      <Footer />
    </section>
  );
};

export default TourPage;
