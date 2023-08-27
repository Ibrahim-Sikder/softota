import React, { useEffect, useState } from "react";
import Umra from "../../../components/Umra/Umra";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";
const HajjUmra = () => {
  return (
    <section>
      <Nav />
      <Umra></Umra>
      <Footer />
    </section>
  );
};

export default HajjUmra;
