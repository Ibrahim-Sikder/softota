import React from 'react'
import AboutHero from '../../../components/About/AboutHero'
import Team from '../../../components/Team/Team'
import Mission from '../../../components/Mission/Mission'
import Footer from '../../../components/Footer/Footer'
import Nav from '../../../components/NavBarr/Nav'


const index = () => {
  return (
    <section>
      <Nav/>
     <AboutHero></AboutHero>
     <Team></Team>
     <Mission></Mission>
     <Footer/>
    </section>
  )
}

export default index
