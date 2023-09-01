import React, { useEffect, useState } from "react";
import Umra from "../../../components/Umra/Umra";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
import { Helmet } from "react-helmet-async";
const HajjUmra = () => {
  return (
    <section>
      <Helmet>
            <title> Ghuronti || Hajj & Umrah </title>
        </Helmet>
      <Nav />
      <Umra></Umra>
      <Footer />
    </section>
  );
};

export default HajjUmra;
