"use client"

import React from "react"
import Hotel from "../../../components/Hotel/Hotel"
import Travel from "../../../components/Travel/Travel"
import Customer from "../../../components/Customer/Customer"
import Footer from "../../../components/Footer/Footer"
import Nav from "../../../components/NavBarr/Nav"
import { Helmet } from "react-helmet-async"
import Reveiw from "../../../components/Vissa/Review/Reveiw"
import TourDestination from "../../../components/Tour/TourDestination"
const HotelPage = () => {
  return (
    <section>
      <Helmet>
        <title>Ghuronti || Hotel </title>
      </Helmet>
      <Nav />
      <Hotel></Hotel>
      <TourDestination/>
      <Travel></Travel>
      <Customer></Customer>
      <Reveiw />
      <Footer />
    </section>
  )
}

export default HotelPage
