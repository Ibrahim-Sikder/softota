import React from 'react'
import Trending from '../../../components/Trending/Trending'
import Hotel from '../../../components/Hotel/Hotel'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Banner from '../../../components/Banner/Banner'
import { getSession, signIn } from 'next-auth/react';
const HotelPage = () => {

  return (
    <div>
      <Hotel></Hotel>
      <Travel></Travel>
      <Customer></Customer>
    </div>
  )
}

export default HotelPage
