import React from 'react'
import style from './Umra.module.css'
import Image from 'next/image';
import banner from '../../public/banner.png'
import mokka from '../../public/mokka.png'
import flight from '../../public/flight.png'
import hotel from '../../public/hotel.png'
import vissa from '../../public/vissa.png'
import tours from '../../public/tours.png'
import buss from '../../public/buss.png'
const Umra = () => {
     return (
         <div className='pb-32'>
           <div className={style.banner}>
            <Image
               src={banner}
               alt="Picture of the author"        
               />
            <h2>Welcome to Ghuronti! Find Hajj & Umrah Packages</h2>
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
                  Hajj & Umrah{" "}
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
                  Flight{" "}
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
                  Hotel{" "}
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
                  Visa{" "}
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
                  </span>{" "}
                  Tour{" "}
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
                  </span>{" "}
                  Busses{" "}
                </li>
              </ul>
            </div>
            <div className={style.inputBox}>
              <span className={style.hajj}>Hajj Package</span>
              <span>Ummra Package</span>
            </div>
           
            <button className={style.flightBtn}>Search Flight</button>
          </div>
         </div>
        );
}

export default Umra
