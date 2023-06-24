import React from 'react'
import style from './Countries.module.css'
import Image from 'next/image';
import malasiya from '../../public/malasiya.png';
import usa from '../../public/usa.png';
import england from '../../public/england.png';
import china from '../../public/china.png';
import germany from '../../public/germany.png';
import canada from '../../public/canada.png';
import italy from '../../public/italy.png';
import newzealand from '../../public/newzealand.png';
import NavBar from '../NavBar/NavBar';
import banner from '../../public/banner.png'
import Link from 'next/link';
import mokka from '../../public/mokka.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hIcon.png'
import vissa from '../../public/vissa.png'
import tours from '../../public/tours.png'
import buss from '../../public/buss.png';
import { FaSistrix } from "react-icons/fa";

const Countries = () => {
  return (
    <div>
   
      <div className={style.banner}>
      <Image
        className={style.bannerImg}
        src={banner}
        alt="Picture of the author"        
        />
      <h2>Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h2>
      {/* navbar html */}
      <div className={style.bannerItem}>
        <ul className={style.menu}>
          <li className={style.items}>
            <span>
            <Image
                    src={mokka}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
             
            </span>{" "}
           <Link href='/hajjUmra'> Hajj & Umrah</Link>
          </li>
          <li className={style.items}>
            <span>
            <Image
                    src={flight}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
              
            </span>{" "}
            <Link href='/flight'>Flight</Link>
          </li>
          <li className={style.items}>
            <span>
            <Image
                    src={hotel}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
             
            </span>{" "}
            <Link href='/hotel'> Hotel </Link>
          </li>
          <li className={style.items}>
            <span>
            <Image
                    src={vissa}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
            </span>{" "}
            <Link href='/vissa'>Vissa</Link>
          </li>
          <li className={style.items}>
            <span>
            <Image
                    src={tours}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
            </span>
            <Link href='/hotel'> Tour </Link>
          </li>
          <li className={style.items}>
            <span>
            <Image
                    src={buss}
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="mr-3 text-[#092E3D]"
                   
               />
            </span>
            <Link href='/hotel'> Busses</Link>
          </li>
        </ul>
        <div className={style.vissaInputBox}>
          <p className={style.hajjPackage}>Visa Processing</p>
          <p>Vissa Guideline</p>
        </div>
        <div className={style.searchingVissa}>
          <FaSistrix className={style.vissaIcon}/>
          <input  placeholder='Enter your country' />
          <button >Search Vissa </button>
        </div>
      </div>

    </div>

      {/* Countriess  */}
      <div className='mt-52 text-center'>
          <div className='w-[500px] mx-auto text-center mb-10' >
               <h2 className='text-2xl font-bold capitalize'>Top visited countries</h2>
               <p>The Top Ranking of Most Visited Countries in the World is based on the most recent available numbers of visitors a country</p>
          </div>
          <div className='w-9/12 h-3/4 mx-auto p-10 bg-[#DBF0DB]'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10 place-items-center'>
            <Image
            className={style.countryImg}
              src={malasiya}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={china}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={germany}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={newzealand}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={england}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={italy}
              alt="Picture of the author"
              width={500}
              height={500}
            />
            <Image
            className={style.countryImg}
              src={usa}
              alt="Picture of the author"
              width={500}
              height={500}
            />
           
            </div>
            <button className='countryBtn  bg-[#4AB449] py-2 px-5 text-white'>View More countries</button>
          </div>
       </div>
    </div>
  )
}

export default Countries
