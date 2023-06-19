import React from 'react'
import AboutHero from '../../../components/About/AboutHero'
import Team from '../../../components/Team/Team'
import Mission from '../../../components/Mission/Mission'
import Customer from '../../../components/Customer/Customer'


const index = () => {
  return (
    <section className='w-[1440px] mx-auto'>
     <AboutHero></AboutHero>
     <Team></Team>
     <Mission></Mission>
     <Customer></Customer>
    </section>
  )
}

export default index
