import React from 'react'
import style from './Train.module.css'
import Image from 'next/image'
import NavBar from '../NavBar/NavBar'
import banner from '../../public/banner.png'
import Places from '../Places/Places'
import Travel from '../Travel/Travel'
import Trending from '../Trending/Trending'
import Customer from '../Customer/Customer'
import Link from 'next/link';
import mokka from '../../public/mokka.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hIcon.png'
import vissa from '../../public/vissa.png'
import tours from '../../public/tours.png'
import buss from '../../public/buss.png';
import TrainBanner from './TrainBanner'
const Train = () => {
  return (
    <div className={style.train}>
    <TrainBanner></TrainBanner>
    <Places></Places>
    <Travel></Travel>
    <Trending></Trending>
    <Customer></Customer>
    </div>
  )
}

export default Train
