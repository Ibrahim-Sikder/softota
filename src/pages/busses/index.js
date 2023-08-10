import React, { useEffect, useState } from 'react'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import TourDestination from '../../../components/Tour/TourDestination'
import BestPlace from '../../../components/BestPlace/BestPlace'
import BusBanner from '../../../components/BusBanner/BusBanner'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'

const Busses = () => {
  
  return (
    <div>
      <Nav/>
      <BusBanner></BusBanner>
      <BestPlace/>
    <Travel></Travel>
    <TourDestination></TourDestination>
    <Customer></Customer>
    <Footer/>
    </div>
  )
}

export default Busses
