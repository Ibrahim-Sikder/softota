import React, { useEffect, useState } from 'react'
import Umra from '../../../components/Umra/Umra'
import { getSession, signIn } from 'next-auth/react';
const HajjUmra = () => {
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
      <Umra></Umra>
    </div>
  )
}

export default HajjUmra
