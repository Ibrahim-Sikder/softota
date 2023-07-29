import React from 'react'
import Payment from '../../../components/Payment/Payment'
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
      <Payment></Payment>
      <Footer/>
    </div>
  )
}

export default index
