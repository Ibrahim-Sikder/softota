import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import FlightMission from '../../../components/FlightMission/FlightMission'
import Customer from '../../../components/Customer/Customer'
import Hotel from '../../../components/Hotel/Hotel'
import BestPlace from '../../../components/BestPlace/BestPlace'

const index = () => {
  return (
    <div>
      <Banner></Banner>
      <BestPlace></BestPlace>
      <Travel></Travel>
      <FlightMission></FlightMission>
      <Customer></Customer>
    </div>
  )
}

export default index
