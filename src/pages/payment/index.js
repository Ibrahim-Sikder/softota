import React from 'react'
import Payment from '../../../components/Payment/Payment'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const index = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <Payment></Payment>
      <Footer/>
    </div>
  )
}

export default index
