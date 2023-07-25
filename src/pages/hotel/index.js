import React from 'react'
import Trending from '../../../components/Trending/Trending'
import Hotel from '../../../components/Hotel/Hotel'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Banner from '../../../components/Banner/Banner'
import { getSession, signIn } from 'next-auth/react';
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import TourDestination from '../../../components/Tour/TourDestination'
import HotelTrending from '../../../components/Hotel/HotelTrending/HotelTrending'
const HotelPage = () => {

  return (
    <div>
      <TopBar/>
      <Header/>
      <Hotel></Hotel>
      <Travel></Travel>
      <HotelTrending/>
      <Customer></Customer>
      <Footer/>
    </div>
  )
}

export default HotelPage
