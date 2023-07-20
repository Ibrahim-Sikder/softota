import React, { useEffect, useState } from 'react'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/Tour'
import { getSession, signIn } from 'next-auth/react'
import TourDestination from '../../../components/Tour/TourDestination'
import BestPlace from '../../../components/BestPlace/BestPlace'

const TourPage = () => {
  
  return (
    <div>
    <Tour></Tour>
    <BestPlace></BestPlace>
    <Travel></Travel>
    <TourDestination></TourDestination>
    <Customer></Customer>
    </div>
  )
}

export default TourPage
