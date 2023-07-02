import React, { useEffect, useState } from 'react'
import Trending from '../../../components/Trending/Trending'
import Hotel from '../../../components/Hotel/Hotel'
import Travel from '../../../components/Travel/Travel'
import Customer from '../../../components/Customer/Customer'
import Banner from '../../../components/Banner/Banner'
import { getSession, signIn } from 'next-auth/react';
const HotelPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const securePage = async()=>{
      const session = await getSession()
      if(!session){
        signIn()
      }
      else{
        setLoading(false)
      }
    }
    securePage()
  },[])

  if(loading){
    return <h2>Loading.....</h2>
  }
  return (
    <div>
      <Hotel></Hotel>
      <Travel></Travel>
      <Customer></Customer>
    </div>
  )
}

export default HotelPage
