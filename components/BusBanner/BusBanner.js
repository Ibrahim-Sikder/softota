import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hotel2 from '../../public/hotel5.png'
import hotel3 from '../../public/hotel6.png'
import hotel6 from '../../public/hotel7.png'
import hotel4 from '../../public/hotel8.png'
import hotel5 from '../../public/hotel8.png'
import hotel7 from '../../public/hotel9.png'
import hotel8 from '../../public/hotel10.png'
import banner from '../../public/banner.png'
import NavBar from "../NavBar/NavBar";
import hajj from '../../public/hajj.png'
import tour from '../../public/tour.png'
import train from '../../public/train.png'
import buss from '../../public/Bus.png'
import flight from '../../public/flight.png'
import hotelIcon from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import style from './Bus.module.css'
const BusBanner = () => {
     return (
          <div>
              {/* banner */}
          <div className={style.bannerWrap}>
        <h2>Welcome to Ghuronti! Find Tours, Flights & Hotels Packages</h2>
        <div className={style.heroBoxMain}>
         <div className={style.packageWrap}>
         <div className={style.package}>
            <div >
            <h4>Travel From </h4>
            <input type="text " placeholder='Enter your city' />
            </div>
          </div>
          <div className={style.package2}>
            <div>
            <h4>Travel To </h4>
            <input type="text " placeholder='Bangladesh' />
            </div>
          </div>
         </div>
         <div className={style.packageWrap}>
         <div className={style.packageDate}>
            <div className={style.date}>
            <h4>Depart To </h4>
            <input type="date" />
            </div>
            <div className={style.date2}>
            <h4>Return To </h4>
            <input type="date" />
            </div>
          </div>
          <div className={style.package4}>
            <div>
            <h4>Passengers & Seat Class</h4>
            <input type="text "  placeholder='1 person'/>
            </div>
          </div>
         </div>
          <button className={style.heroBoxBtn}>Get Your Offers</button>

          {/* menubar */}
          <div>
            <ul className={style.menu}>
             <li>
             <Image
              src={hajj}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/hajjUmra'><p className='ml-3'>Hajj & Umrah</p></Link>
             </li>
             <li>
             <Image
              src={flight}
              alt='menu'
              width={30}
              height={30}
              />
                <Link href='/flight'><p className='ml-3'>Flight</p></Link>
             </li>
             <li>
             <Image
              src={hotelIcon}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/hotel'><p className='ml-3'>Hotel</p></Link>
             </li>
             <li>
             <Image
              src={vissa}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/vissa'><p className='ml-3'>Vissa</p></Link>
             </li>
             <li>
             <Image
              src={tour}
              alt='menu'
              width={30}
              height={30}
              />
               <Link href='/tours'><p className='ml-3'>Tours</p></Link>
             </li>
             <li>
             <Image
              src={buss}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/busses'><p className='ml-3'>Buses</p></Link>
             </li>
             <li className={style.trainLi}>
             <Image
              src={train}
              alt='menu'
              width={30}
              height={30}
              />
             <Link href='/train'><p className='ml-3'>Trains</p></Link>
             </li>
            </ul>
          </div>


        </div>
    </div> 
          </div>
     );
};

export default BusBanner;