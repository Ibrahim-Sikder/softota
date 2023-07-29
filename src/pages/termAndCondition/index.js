import React from 'react'
import TermAndCondition from '../../../components/TermAndCondition/TermAndCondition'
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
      <TermAndCondition></TermAndCondition>
      <Footer/>
    </div>
  )
}

export default index
