"use client";

import { Inter } from "next/font/google";
import Banner from "../../components/Banner/Banner";
import Travel from "../../components/Travel/Travel";
import Customer from "../../components/Customer/Customer";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/NavBarr/Nav";
import TourDestination from "../../components/Tour/TourDestination";
import FlightMission from "../../components/FlightMission/FlightMission";


export const config ={
  unstable_runtimeJS: false
}


export default function Home() {
  return (
    <section>
      <Nav />
      <Banner></Banner>
      <TourDestination></TourDestination>
      <Travel></Travel>
      <FlightMission></FlightMission>
      <Customer></Customer>
      <Footer />
    </section>
  );
}
