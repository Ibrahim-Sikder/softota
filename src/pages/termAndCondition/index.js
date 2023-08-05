import React from "react";
import TermAndCondition from "../../../components/TermAndCondition/TermAndCondition";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <div>
      <Nav />
      <TermAndCondition></TermAndCondition>
      <Footer />
    </div>
  );
};

export default index;
