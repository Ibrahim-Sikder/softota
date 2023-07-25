import React, { useEffect, useState } from 'react'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/Tour'
import BestPlace from '../../../components/BestPlace/BestPlace'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import HotelTrending from '../../../components/Hotel/HotelTrending/HotelTrending'

const TourPage = () => {
  
  return (
    <div>
      <TopBar/>
      <Header/>
    <Tour></Tour>
    <BestPlace></BestPlace>
    <Travel></Travel>
    <Customer></Customer>
    <Footer/>
    </div>
  )
}

export default TourPage
