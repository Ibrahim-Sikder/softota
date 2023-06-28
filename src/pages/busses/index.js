import React from 'react'
import TrainBanner from '../../../components/Train/TrainBanner'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'

const index = () => {
  return (
    <div>
      <TrainBanner></TrainBanner>
    <Places></Places>
    <Travel></Travel>
    <Trending></Trending>
    <Customer></Customer>
    </div>
  )
}

export default index
