import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Travel from '../../../components/Travel/Travel'
import FlightMission from '../../../components/FlightMission/FlightMission'
import Customer from '../../../components/Customer/Customer'
import TourDestination from '../../../components/Tour/TourDestination'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const index = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
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
