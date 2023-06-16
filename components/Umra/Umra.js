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
import hajj from '../../public/hajj.png'
import hajj2 from '../../public/hajj2.png'
import hajj3 from '../../public/hajj3.png'
import clock from '../../public/clock.png'
const Umra = () => {
     return (
         <section className='pb-32'>
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
                  </span>
                  Busses
                </li>
              </ul>
            </div>
            <div className={style.package}>
              <span className={style.hajj}>Hajj Package</span>
              <span>Ummra Package</span>
            </div>
           
            <button className={style.flightBtn}>Search Flight</button>
          </div>
          <section>
               <div className='w-[610px] mt-5 mx-auto text-center'>
                    <h2 className='text-3xl bold' >Best Hajj Packages 2023 from bangladesh</h2>
                    <p className=' mt-3 mb-12 text-[#738187]'>Some of the renowned and best Hajj agencies in Bangladesh are
                    Universal Travel & Tours, Holy Hajj & Umrah</p>
               </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 md:grid-cols-2 place-items-center'>
                    <div className={style.singleHajj}>
                         <Image
                         src={hajj}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         />
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
                         <Image
                         src={hajj}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         />
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
                         <Image
                         src={hajj}
                         alt="Picture of the author"
                         width={500}
                         height={500}
                         />
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
              <div className='w-[700px] mt-12 mx-auto text-center'>
                    <h2 className='text-3xl bold' >Hajj pre-registration Bangladesh 2023- 2024-2025</h2>
                    <p className=' mt-3 mb-12 text-[#738187]'>
                    Non-resident & Resident Bangladeshi adults and children can
                    apply for hajj pre-registration through the Hajj agency.
                    </p>
               </div>
               <div className='flex justify-around w-[900px] mx-auto'>
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
