import React from 'react'
import Image from "next/image";
import mokka from '../../public/mokka.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hIcon.png'
import vissa from '../../public/vissa.png'
import tours from '../../public/tours.png'
import buss from '../../public/buss.png';
import style from '../Banner/Banner.module.css'
import Link from 'next/link';
const NavBar = () => {
  return (
    <div>
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
      </div>
    </div>
  )
}

export default NavBar
