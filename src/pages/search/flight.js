import React from "react";
import FlightSearch from "../../../components/SearhPage/FlightSearch/FlightSearch";
import Footer from "../../../components/Footer/Footer";
import dynamic from "next/dynamic";
import Nav from "../../../components/NavBarr/Nav";
const flightSearch = () => {
  return (
    <div>
     <Nav/>
      <FlightSearch />
      <Footer />
    </div>
  );
};

export default dynamic(() => Promise.resolve(flightSearch), { ssr: false });
