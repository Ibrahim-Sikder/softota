'use client'

import Image from 'next/image'
import React from 'react'
import hotel from '../../public/hotel7.png';
import hotel2 from '../../public/hotel8.png';
import hotel3 from '../../public/hotel9.png'
import hotel4 from '../../public/hotel10.png'
import hotel5 from '../../public/hotel11.png';
import clock from '../../public/clock1.png';
import clock1 from '../../public/clock1.png';
import clock2 from '../../public/clock2.png';
import clock3 from '../../public/clock3.png';
import clock4 from '../../public/clock4.png';
import clock5 from '../../public/clock5.png';
import travel from '../../public/travel2.png';
import style from './DetailHotel.module.css'
import Trending from '../Trending/Trending';
import location from '../../public/location.png'



const  DetailHotel = async () => {
  const datas = await getData()

  return (
  <>
          <h2>Hotels Details </h2>
         
  </>
  )
}

export default DetailHotel
