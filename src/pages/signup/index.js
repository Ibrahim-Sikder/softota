import React from "react";
import SignUp from "../../../components/SignUp/SignUp";
import Footer from "../../../components/Footer/Footer";
import Nav from "../../../components/NavBarr/Nav";

const index = () => {
  return (
    <div>
      <Nav />
      <SignUp></SignUp>
      <Footer />
    </div>
  );
};

export default index;
