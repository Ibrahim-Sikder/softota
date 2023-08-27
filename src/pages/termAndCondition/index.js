import React from "react";
import TermAndCondition from "../../../components/TermAndCondition/TermAndCondition";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <section>
      <Nav />
      <TermAndCondition></TermAndCondition>
      <Footer />
    </section>
  );
};

export default index;
