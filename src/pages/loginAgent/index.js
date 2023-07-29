import React from 'react'
import LoginAgent from '../../../components/LoginAgent/LoginAgent'
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
      <LoginAgent></LoginAgent>
      <Footer/>
    </div>
  )
}

export default index
