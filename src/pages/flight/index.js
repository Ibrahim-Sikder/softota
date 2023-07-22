import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import FlightMission from '../../../components/FlightMission/FlightMission'
import Customer from '../../../components/Customer/Customer'
import Hotel from '../../../components/Hotel/Hotel'
import BestPlace from '../../../components/BestPlace/BestPlace'
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
      <BestPlace></BestPlace>
      <Travel></Travel>
      <TourDestination></TourDestination>
      <FlightMission></FlightMission>
      <Customer></Customer>
      <Footer/>
    </div>
  )
}

export default index
