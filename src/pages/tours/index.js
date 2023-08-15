import React, { useEffect, useState } from 'react'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/Tour'
import BestPlace from '../../../components/BestPlace/BestPlace'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'

const TourPage = () => {
  
  return (
    <div>
      <Nav/>
    <Tour></Tour>
    <BestPlace></BestPlace>
    <Travel></Travel>
    <div className="mt-12">
    <Customer></Customer>
    </div>
    <Footer/>
    </div>
  )
}

export default TourPage
