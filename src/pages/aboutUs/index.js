import React from 'react'
import AboutHero from '../../../components/About/AboutHero'
import Team from '../../../components/Team/Team'
import Mission from '../../../components/Mission/Mission'
import Customer from '../../../components/Customer/Customer'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import TeamSection from '../../../components/TeamSection/TeamSection'
import Nav from '../../../components/NavBarr/Nav'


const index = () => {
  return (
    <section>
      {/* <TopBar/>
      <Header/> */}
      <Nav/>
     <AboutHero></AboutHero>
     <Team></Team>
     <Mission></Mission>
     <Customer></Customer>
     <Footer/>
    </section>
  )
}

export default index
