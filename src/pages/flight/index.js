import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Travel from '../../../components/Travel/Travel'
import FlightMission from '../../../components/FlightMission/FlightMission'
import Customer from '../../../components/Customer/Customer'
import TourDestination from '../../../components/Tour/TourDestination'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'

const index = () => {
  return (
    <div>
      <Nav/>
      <Banner></Banner>      
      <TourDestination></TourDestination>
      <Travel></Travel>
      <FlightMission></FlightMission>
      <Customer></Customer>
      <Footer/>
    </div>
  )
}

export default index
