import React from 'react'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/TourBanner'

const index = () => {
  return (
    <div>
    <Tour></Tour>
    <Places></Places>
    <Travel></Travel>
    <Trending></Trending>
    <Customer></Customer>
    </div>
  )
}

export default index
