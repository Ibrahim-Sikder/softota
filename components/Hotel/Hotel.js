import Image from 'next/image';
import React from 'react'
import style from './Hotel.module.css';
import hotel from '../../public/hotel4.png'
import hotel2 from '../../public/hotel5.png'
import hotel3 from '../../public/hotel6.png'
import Link from 'next/link';

const Hotel = () => {
     async function getData() {
          const res = await fetch('data.json')
          if (!res.ok) {
            throw new Error('Failed to fetch data')
          }
         
          return res.json()
        }
     return (
          <div className={style.destination}>
            <div className={style.trendingHead}>
              <h2>Trending International Destinations</h2>
              <p>
                
                Serving our customer, searching their entire satisfaction and
                providing <br /> touristic services of quality, committing to the
                social, cultural and <br /> environmental reality of our country.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className={style.trending}>
              <Image
                  src={hotel}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className='object-cover'
                  />
                {/* <img src={trending} className="w-full" alt="" /> */}
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New York City Hotels </h6>
                    <span>
                      Starts From <span className="text-black">184$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                
               {/* <Link href={`http://localhost:3000/hotel/${id}`}> */}
               <button>View Details </button>
               {/* </Link> */}
              </div>
              <div className={style.trending}>
              <Image
                  src={hotel2}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className='object-cover'
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>Dubai: The city of life </h6>
                    <span>
                      Starts From <span className="text-black">155$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
              <div className={style.trending}>
              <Image
                  src={hotel3}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                  className='object-cover'
                  />
                <div className="w-full flex justify-between px-5">
                  <div>
                    <h6>New Orleans Hotels </h6>
                    <span>
                      Starts From <span className="text-black">199$</span>
                    </span>
                  </div>
                  <div className={style.night}>
                  <p>1 Night </p>
                  </div>
                </div>
                <button>View Details </button>
              </div>
            </div>
          </div>
        );
}

export default Hotel
