import React, { useEffect, useState } from 'react'
import Places from '../../../components/Places/Places'
import Travel from '../../../components/Travel/Travel'
import Trending from '../../../components/Trending/Trending'
import Customer from '../../../components/Customer/Customer'
import Tour from '../../../components/Tour/TourBanner'
import { getSession, signIn } from 'next-auth/react'

const TourPage = () => {
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
    <Tour></Tour>
    <Places></Places>
    <Travel></Travel>
    <Trending></Trending>
    <Customer></Customer>
    </div>
  )
}

export default TourPage
