import React from 'react'
import Faq from '../../../components/Faq/Faq'
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
      <Faq></Faq>
      <Footer/>
    </div>
  )
}

export default index
