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
const DetailHotel = () => {
  return (
    <div>
      <div className='my-5'>
            <h2 className='text-3xl mb-3 font-bold'>Laos: Land of a Million Elephants!</h2>
            <div className='flex '>
            <Image
            src={location}
            alt="Picture of the author"
            width={20}
            height={20}
            className='mr-3'   
          />
              <p> Vientiane, Laos</p>
            </div>
          </div>
      <div className='grid grid-cols-1 md:grid-cols-12  '>
        <div className='col-span-9'>
          
        <div className='flex flex-wrap' >
          <div >
          <Image
          src={hotel}
          alt="Picture of the author"
          width={500}
          height={500}
          className={style.hotelImg}        
          />
          </div>
         <div>
         <div className='flex h-60'>
          <Image
          src={hotel2}
          alt="Picture of the author"
          width={200}
          height={100}
          className='mx-5 mb-5'      
          />
          <Image
          src={hotel3}
          alt="Picture of the author"
          width={200}
          height={100}
          className='mx-5 mb-5'       
          />
          </div>
          <div className='flex h-60'>
          <Image
          src={hotel4}
          alt="Picture of the author"
          width={200}
          height={100}
          className='mx-5'      
          />
          <Image
          src={hotel5}
          alt="Picture of the author"
          width={200}
          height={100}
          className='mx-5'       
          />
          </div>
         </div>
        </div>
        <div className={style.DetailText}>
          <h3 className='text-xl'>DAY 1: Dubai International Airport - Hotel in Deira / Mirdif (Dubai)</h3>
          <p>
          Welcome to Dubai . Among the seven emirates Dubai is the most popular destination. It is situated on the southern shore of the Persian Gulf on the Arabian Peninsula. It is also called Dubai state to distinguish it from the emirate. Dubai is the second largest Emirate after Abu Dhabi and is usually recognized as the Pearl of the Persian Gulf.Our representative will Transfer you to the hotel . Check in into hotel and enjoy your day.
          There is no service included, you may spend time, as per your interests.
          Desert Safari Duration :Approx. 6 hours (including transportation time)
          Note : Child below 05 Years is not allowed
        </p>
          <div>
            <h3 className='text-xl'>DAY 2: Evening Desert Safari (Dubai)</h3>
            <p>
            SIC TOURS OPERATES FROM BUR DUBAI AND DEIRA LOCATIONS ONLY INCASE PICKUP/DROP OFF HOTEL IS IN OTHER LOCATION PLEASE SELECT PRIVATE VEHICLE OPTION.
            This tour departs in the afternoon across the desert with photo-stops during an exciting dune drive and a stop at a camel farm. The drive continues across the desert. Watch the beautiful sunset in the desert. Witness Interactive Falcon Show. You have the opportunity to do camel riding, sand boarding and try out a henna design.
            </p>
          </div>
          <div>
            <h3 className='text-xl'>DAY 3: Half Day free time in Dubai (No Services included)</h3>
            <p>
            There is no service included, you may spend time, as per your interests.
            Check out from hotel and get transferred to the airport for your journey to further destination .
            Day 04: Today proceed for Dubai City Tour
            Later in the evening proceed for Desert Safari with BBQ dinner
            </p>
          </div>
          <div>
            <h3 className='text-xl'>DAY 4: Half Day free time in Dubai (No Services included)</h3>
            <p>
            There is no service included, you may spend time, as per your interests.
            Check out from hotel and get transferred to the airport for your journey to further destination .
            Day 04: Today proceed for Dubai City Tour
            Later in the evening proceed for Desert Safari with BBQ dinner
            </p>
          </div>
          
        </div>
        <div className={style.trending}>
        <Trending></Trending>
        </div>

        </div>
        {/* Left side  */}
        <div>
          <div className={style.leftSide}>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p>4 Days - 3 Nights</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock2}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p>Hotel type: Delux</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock3}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p>Royal Tulip Hotel(Vientiane)</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock4}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p>Price includes VAT & Tax</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock5}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p> Price Per Person Double: 26,400TK</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <Image
            src={clock4}
            alt="Picture of the author"
            width={20}
            height={30}
            className='mt-1 mx-2'      
          />
            </div>
            <div>
              <p>Price Per Person Twin: 26,400TK</p>
            </div>
            </div>
            <div className='flex mb-3'>
            <div>
            <p className='text-[#A5D6A5] mx-3'>Starts from </p>
            </div>
            <div>
              <p>129999tk</p>
            </div>
            </div>
            <button className={style.leftBtn}>Book Now</button>
            <div>
            <Image
          src={travel}
          alt="Picture of the author"
          width={400}
          height={400}
          className={style.travelImg}        
          />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default DetailHotel
