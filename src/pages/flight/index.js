import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import FlightMission from '../../../components/FlightMission/FlightMission'
import Customer from '../../../components/Customer/Customer'

const index = () => {
  return (
    <div>
      <Banner></Banner>
      <Places></Places>
      <Travel></Travel>
      <Trending></Trending>
      <FlightMission></FlightMission>
      <Customer></Customer>
    </div>
  )
}

export default index
