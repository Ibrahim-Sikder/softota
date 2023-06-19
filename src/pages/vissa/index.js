import React from 'react'
import Banner from '../../../components/Banner/Banner'
import Countries from '../../../components/Countries/Countries'
import Passion from '../../../components/Passion/Passion'
import Travel from '../../../components/Travel/Travel'
import NavBar from '../../../components/NavBar/NavBar'

const index = () => {
  return (
    <section className='w-[1440px] mx-auto'>
      
      <Countries></Countries>
      <Passion></Passion>
      <Travel></Travel>
    </section>
  )
}

export default index
