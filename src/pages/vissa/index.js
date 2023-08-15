import React from "react";
import Countries from "../../../components/Countries/Countries";
import Passion from "../../../components/Passion/Passion";
import Travel from "../../../components/Travel/Travel";
import Vissa from "../../../components/Vissa/Vissa";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <section>
      <Nav />
      <Vissa></Vissa>
      <Countries></Countries>
      <Passion></Passion>
      <div className="my-10">
      <Travel></Travel>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default index;
