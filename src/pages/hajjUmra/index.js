import React, { useEffect, useState } from 'react'
import Umra from '../../../components/Umra/Umra'
import { getSession, signIn } from 'next-auth/react';
import TopBar from '../../../components/TopBar/TopBar';
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footer/Footer';
const HajjUmra = () => {
 
  return (
    <div>
      <TopBar/>
      <Header/>
      <Umra></Umra>
      <Footer/>
    </div>
  )
}

export default HajjUmra
