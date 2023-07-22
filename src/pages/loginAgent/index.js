import React from 'react'
import LoginAgent from '../../../components/LoginAgent/LoginAgent'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const index = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <LoginAgent></LoginAgent>
      <Footer/>
    </div>
  )
}

export default index
