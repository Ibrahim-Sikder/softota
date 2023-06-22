import React from 'react'
import Trending from '../../../components/Trending/Trending'
import Hotel from '../../../components/Hotel/Hotel'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Banner from '../../../components/Banner/Banner'

const index = () => {
  return (
    <div className='w-[1440px] mx-auto'>
      <Banner></Banner>
      <Hotel></Hotel>
      <Travel></Travel>
      <Hotel></Hotel>
      <Customer></Customer>
    </div>
  )
}

export default index
