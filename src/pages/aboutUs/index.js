import React from 'react'
import AboutHero from '../../../components/About/AboutHero'
import Team from '../../../components/Team/Team'
import Mission from '../../../components/Mission/Mission'
import Customer from '../../../components/Customer/Customer'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'


const index = () => {
  return (
    <section>
      <TopBar/>
      <Header/>
     <AboutHero></AboutHero>
     <Team></Team>
     <Mission></Mission>
     <Customer></Customer>
     <Footer/>
    </section>
  )
}

export default index
