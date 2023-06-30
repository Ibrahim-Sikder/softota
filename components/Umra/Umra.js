import React from 'react'
import style from './Umra.module.css'
import Image from 'next/image';
import hajj4 from '../../public/hajj4.png'
import hajj2 from '../../public/hajj2.png'
import hajj3 from '../../public/hajj3.png'
import clock from '../../public/clock.png'
import Link from 'next/link';
import Banner from '../Banner/Banner';
const Umra = () => {
     return (
         <section >
           <Banner></Banner>
          <section className={style.ummraWrap}>
               <div className=' text-center'>
                    <h2 className='text-3xl bold' >Best Hajj Packages 2023 from bangladesh</h2>
                    <p className=' mt-3 mb-12 text-[#738187]'>Some of the renowned and best Hajj agencies in Bangladesh are
                    Universal Travel & Tours, Holy Hajj & Umrah</p>
               </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 place-items-center'>
                    <div className={style.singleHajj}>
                         <div className={style.imgWrap}>
                         <Image
                         src={hajj2}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         className={style.hajjImg}
                         />
                         </div>
                           <div className='flex justify-between'>
                         <h3 className='text-2xl'>Economy Package</h3>
                         <p className={style.day}>40 Days </p>
                         </div>
                         <ul>
                              <li>3* Hotel In Mecca.</li>
                              <li>3* Hotel In Madinah.</li>
                              <li>Hotel Distance, 300 – 400 Meter.</li>
                              <li>5-6 Persons In Every Room.</li>
                              <li>Saudi / Biman Airlines Ticket.</li>
                              <li>Travel By Ac Bus.</li>
                         </ul>
                         <div className='flex justify-between w-48 '>
                              <span className='text-[#4AB449]'>Starts From</span>
                              <span>979999TK</span>
                         </div>
                         <button className={style.hajjBtn}>View Details</button>

                    </div>
                    <div className={style.singleHajjmiddl}>
                         <div className={style.imgWrap}>
                         <Image
                         src={hajj3}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         className={style.hajjImg}
                         />
                         </div>
                          <div className='flex justify-between'>
                         <h3 className='text-2xl'>Economy Package</h3>
                         <p className={style.day}>40 Days </p>
                         </div>
                         <ul>
                              <li>3* Hotel In Mecca.</li>
                              <li>3* Hotel In Madinah.</li>
                              <li>Hotel Distance, 300 – 400 Meter.</li>
                              <li>5-6 Persons In Every Room.</li>
                              <li>Saudi / Biman Airlines Ticket.</li>
                              <li>Travel By Ac Bus.</li>
                         </ul>
                         <div className='flex justify-between w-48 '>
                              <span className='text-[#4AB449]'>Starts From</span>
                              <span>979999TK</span>
                         </div>
                         <button className={style.hajjBtn}>View Details</button>

                    </div>
                    <div className={style.singleHajj}>
                         <div className={style.imgWrap}>
                         <Image
                         src={hajj4}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         className={style.hajjImg}
                         />
                         </div>
                         <div className='flex justify-between'>
                         <h3 className='text-2xl'>Economy Package</h3>
                         <p className={style.day}>40 Days </p>
                         </div>
                         <ul>
                              <li>3* Hotel In Mecca.</li>
                              <li>3* Hotel In Madinah.</li>
                              <li>Hotel Distance, 300 – 400 Meter.</li>
                              <li>5-6 Persons In Every Room.</li>
                              <li>Saudi / Biman Airlines Ticket.</li>
                              <li>Travel By Ac Bus.</li>
                         </ul>
                         <div className='flex justify-between w-48 '>
                              <span className='text-[#4AB449]'>Starts From</span>
                              <span>979999TK</span>
                         </div>
                         <button className={style.hajjBtn}>View Details</button>

                    </div>
              </div>
              <div className= 'text-center mt-10 md:mt-14 md:w-[500px] mx-auto'>
                    <h2 className='text-3xl bold' >Hajj pre-registration Bangladesh 2023- 2024-2025</h2>
                    <p className=' mt-3 mb-12 text-[#738187]'>
                    Non-resident & Resident Bangladeshi adults and children can
                    apply for hajj pre-registration through the Hajj agency.
                    </p>
               </div>
               <div className={style.ummrahClock}>
               <div className={style.clock}>
                    <p>
                    <Image
                         src={clock}
                         alt="Picture of the author"
                         width={20}
                         height={20}
                         />
                    </p>
                    <div>
                         <p>NID scanned soft</p>
                         <p> copy/photocopy</p>
                    </div>
               </div>
               <div className={style.clock2}>
                    <p>
                    <Image
                         src={clock}
                         alt="Picture of the author"
                         width={20}
                         height={20}
                         />
                    </p>
                    <div>
                         <p>Birth certificate s color soft copy</p>
                    </div>
               </div>
               <div className={style.clock}>
                    <p>
                    <Image
                         src={clock}
                         alt="Picture of the author"
                         width={20}
                         height={20}
                         />
                    </p>
                    <div>
                         <p>Valid mobile number + email id</p>
                    </div>
               </div>
               </div>
               <div className='flex items-center justify-center mt-10'> 
               <button className={style.rBtn}>
                    Get pre-register
               </button>
               </div>
          </section>
         </section>
        );
}

export default Umra
