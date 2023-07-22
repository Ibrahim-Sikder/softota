import React, { useEffect, useState } from 'react'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/Tour'
import { getSession, signIn } from 'next-auth/react'
import TourDestination from '../../../components/Tour/TourDestination'
import BestPlace from '../../../components/BestPlace/BestPlace'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const TourPage = () => {
  
  return (
    <div>
      <TopBar/>
      <Header/>
    <Tour></Tour>
    <BestPlace></BestPlace>
    <Travel></Travel>
    <TourDestination></TourDestination>
    <Customer></Customer>
    <Footer/>
    </div>
  )
}

export default TourPage
