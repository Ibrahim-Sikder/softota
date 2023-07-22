import React from 'react'
import TermAndCondition from '../../../components/TermAndCondition/TermAndCondition'
import TopBar from '../../../components/TopBar/TopBar'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const index = () => {
  return (
    <div>
      <TopBar/>
      <Header/>
      <TermAndCondition></TermAndCondition>
      <Footer/>
    </div>
  )
}

export default index
