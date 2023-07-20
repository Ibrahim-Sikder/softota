import React, { useEffect, useState } from 'react'
import TrainBanner from '../../../components/Train/TrainBanner'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import { getSession, signIn } from 'next-auth/react';
import Tour from '../../../components/Tour/Tour'
import TourDestination from '../../../components/Tour/TourDestination'
import BestPlace from '../../../components/BestPlace/BestPlace'

const Busses = () => {
  
  return (
    <div>
      <Tour></Tour>
    <Travel></Travel>
    <TourDestination></TourDestination>
    <Customer></Customer>
    </div>
  )
}

export default Busses
