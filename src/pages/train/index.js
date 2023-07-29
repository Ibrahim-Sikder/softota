import React from 'react'
import Train from '../../../components/Train/Train'
import Tour from '../../../components/Tour/Tour'
import Travel from '../../../components/Travel/Travel'
import TourDestination from '../../../components/Tour/TourDestination'
import Customer from '../../../components/Customer/Customer'
import BestPlace from '../../../components/BestPlace/BestPlace'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'

const index = () => {
  return (
    <div>
      {/* <TopBar/>
      <Header/> */}
      <Nav/>
    <Tour></Tour>
    <BestPlace></BestPlace>
    <Travel></Travel>
    <TourDestination></TourDestination>
    <Customer></Customer>
    <Footer/>
    </div>
  )
}

export default index
