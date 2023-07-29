import React from 'react'
import Privacy from '../../../components/Privacy/Privacy'
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
      <Privacy></Privacy>
      <Footer/>
    </div>
  )
}

export default index
