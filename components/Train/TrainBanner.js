import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hajj from '../../public/hajj.png'
import tour from '../../public/tour.png'
import train from '../../public/train.png'
import buss from '../../public/Bus.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import { FaSistrix } from "react-icons/fa";
import style from './Train.module.css'
const TrainBanner = () => {
     return (
          <div className={style.train}>
             <div className={style.bannerWrap}>
              <h2>Welcome to Ghuronti! Find Tours, <br className={style.block} /> Flights & Hotels Packages</h2>
              <div className={style.heroBoxMain}>
              
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
                    src={hotel}
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
                   <p className='ml-3'>Tours</p>
                   </li>
                   <li>
                   <Image
                    src={buss}
                    alt='menu'
                    width={30}
                    height={30}
                    />
                   <Link href='/busses'><p className='ml-3'>Busses </p></Link>
                   </li>
                   <li className={style.trainLi}>
                   <Image
                    src={train}
                    alt='menu'
                    width={30}
                    height={30}
                    />
                   <Link href='/train'><p className='ml-3'>Trains </p></Link>
                   </li>
                  </ul>
                </div>
                {/* Travel banner */}
                <form>
                    <div className={style.travelFormWrap}>
                    <div className={style.travelForm}>
                         <label>Travel From</label><br />
                         <input type="text" placeholder='Enter your city ' />
                    </div>
                    <div className={style.travelForm}>
                         <label>Travel To</label><br />
                         <input type="text" placeholder='Bangladesh' />
                    </div>
                    </div>
                    <div className={style.travelFormWrap}>
                    <div className={style.travelFormDouble}>
                         <div className={style.singleTravel}>
                         <label>Depart To </label><br />
                          <input type="date"  />
                         </div>
                         <div className={style.singleTravel}>
                         <label>Return To </label><br />
                          <input type="date" />
                         </div>
                    </div>
                    <div className={style.travelForm}>
                         <label>Passenger & seat class</label><br />
                         <input type="text" placeholder='1 Person' />
                    </div>
                    </div>
               </form>
               <div className={style.searchTrainBtn}>
                    <button>Search Trains </button>
               </div>
              </div>
          </div>
          </div>
        )
}

export default TrainBanner
