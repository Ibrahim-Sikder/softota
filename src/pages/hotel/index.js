import React from 'react'
import Hotel from '../../../components/Hotel/Hotel'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Footer from '../../../components/Footer/Footer'
import HotelTrending from '../../../components/Hotel/HotelTrending/HotelTrending'
import Nav from '../../../components/NavBarr/Nav'
const HotelPage = () => {

  return (
    <div>
      <Nav/>
      <Hotel></Hotel>
      <Travel></Travel>
      <HotelTrending/>
      <Customer></Customer>
      <Footer/>
    </div>
  )
}

export default HotelPage
