"use client"


import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Places from '../../components/Places/Places'
import Travel from '../../components/Travel/Travel'
import Trending from '../../components/Trending/Trending'
import Mission from '../../components/Mission/Mission'
import Customer from '../../components/Customer/Customer'
import NavBar from '../../components/NavBar/NavBar'
import { signIn, signOut, useSession } from "next-auth/react"
import { useState } from 'react'
import Umra from '../../components/Umra/Umra'
import TopBar from '../../components/TopBar/TopBar'
import Footer from '../../components/Footer/Footer'
import TeamSection from '../../components/TeamSection/TeamSection'

export default function Home() {
  const[loading, setLoading] = useState(false)
  if(loading){
    return <h2>Loadding.......</h2>
  }
 return(
  <section>
    <TopBar></TopBar>
     <Header></Header>  
    <Umra></Umra>
    <Footer></Footer>
</section>
 )

  
}




