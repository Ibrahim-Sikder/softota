import React from 'react'
import Login from '../../../components/Login/Login'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'
const index = () => {
  return (
    <section>
      {/* <TopBar/>
      <Header/> */}
      <Nav/>
      <Login></Login>
      <Footer/>
    </section>
  )
}

export default index
