import React from 'react'
import style from './Vissa.module.css'
import Image from 'next/image'
import Link from 'next/link'
import hajj from '../../public/hajj.png'
import tour from '../../public/tour.png'
import train from '../../public/train.png'
import buss from '../../public/Bus.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import { FaSistrix } from "react-icons/fa";


const Vissa = () => {
     return (
          <div className={style.vissa}>
             <div className={style.bannerWrap}>
              <h2>Welcome to Ghuronti! Find Tours, <br className={style.block} /> Flights & Hotels Packages</h2>
              <div className={style.heroBoxMain}>
                <div className={style.package}>
                  <div className={style.packageWrap}>
                  <button className={style.packageBtn}>Hajj Packages </button>
                  <button>Ummra Packages</button>
                  </div>
                </div>
              
      
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
                  <Link href='/vissa'><p className='ml-3'>Visa</p></Link>
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
                   <p className='ml-3'>Buses</p>
                   </li>
                   <li className={style.trainLi}>
                   <Image
                    src={train}
                    alt='menu'
                    width={30}
                    height={30}
                    />
                   <p className='ml-3'>Trains</p>
                   </li>
                  </ul>
                </div>
                {/* Vissa searchBar */}
                <div className={style.vissaSearchBar}>
                     <input type="text" />
                    
                     <button>Search Vissa</button>
                     <FaSistrix className={style.searchIcon}/>
                </div>
              </div>
          </div>
          </div>
        )
}

export default Vissa
