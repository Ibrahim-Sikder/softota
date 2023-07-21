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

export default function Home() {
  const[loading, setLoading] = useState(false)
  if(loading){
    return <h2>Loadding.......</h2>
  }
 return(
  <section>
 <Banner></Banner>
  <Places></Places>
  <Travel></Travel>
  <Trending></Trending>
  <Mission></Mission>
  <Customer></Customer> 
  
</section>
 )

  
}




