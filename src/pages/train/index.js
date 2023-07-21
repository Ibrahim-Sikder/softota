import React from 'react'
import Train from '../../../components/Train/Train'
import Tour from '../../../components/Tour/Tour'
import Travel from '../../../components/Travel/Travel'
import TourDestination from '../../../components/Tour/TourDestination'
import Customer from '../../../components/Customer/Customer'
import BestPlace from '../../../components/BestPlace/BestPlace'

const index = () => {
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

export default index
