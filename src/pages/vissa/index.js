import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Countries from '../../../components/Countries/Countries'
import Passion from '../../../components/Passion/Passion'
import Travel from '../../../components/Travel/Travel'
import Vissa from '../../../components/Vissa/Vissa'
import Footer from '../../../components/Footer/Footer'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'

const index = () => {
  return (
    <section>
      <TopBar></TopBar>
      <Header></Header>
     <Vissa></Vissa>
      <Countries></Countries>
      <Passion></Passion>
      <Travel></Travel>
      <Footer></Footer>
    </section>
  )
}

export default index
