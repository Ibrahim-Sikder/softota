import React from 'react'
import Login from '../../../components/Login/Login'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
const index = () => {
  return (
    <section>
      <TopBar/>
      <Header/>
      <Login></Login>
      <Footer/>
    </section>
  )
}

export default index
