import React from 'react'
import SignUp from '../../../components/SignUp/SignUp'
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
      <SignUp></SignUp>
      <Footer/>
    </div>
  )
}

export default index
