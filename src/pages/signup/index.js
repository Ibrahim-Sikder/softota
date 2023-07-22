import React from 'react'
import SignUp from '../../../components/SignUp/SignUp'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const index = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <SignUp></SignUp>
      <Footer/>
    </div>
  )
}

export default index
