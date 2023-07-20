import React, { useEffect, useState } from 'react'
import Umra from '../../../components/Umra/Umra'
import { getSession, signIn } from 'next-auth/react';
const HajjUmra = () => {
 
  return (
    <div>
      <Umra></Umra>
    </div>
  )
}

export default HajjUmra
