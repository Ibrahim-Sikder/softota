import React from 'react';
import style from './Place.module.css'
import place from '../../public/see2.png'
import place2 from '../../public/see2.png'
import place3 from '../../public/see2.png'
import Image from 'next/image';
const Places = () => {
    return (
        <div className={style.places}>
           <h2 className='mb-16 grid place-items-center'>Best Places To Visit In Bangladesh</h2>
           <div className={style.bestPlaces}>
                <div>
                <Image
                    src={place}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                    className='w-full mr-8'
               />
                    <div className={`style.placesPrice w-full`}>
                        <span>Cox s Bazar</span>
                        <span>1500tk</span>
                    </div>
                </div>
                <div className={style.leftContent}>
                    <p>Bangladesh is a South Asian country with a rich cultural heritage <br /> and natural beauty. It is home to the world s largest mangrove <br /> forest, culture, and natural beauty.</p>
                    <div className='mt-[85px] grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='w-full'>
                        <Image
                    src={place2}
                    alt="Picture of the author"
                    width={500}
                    height={500}
               />
                            <div className={`w-full style.placesPrice`}>
                                <span>Cox s Bazar</span>
                                <span>1500tk</span>
                            </div>
                        </div>
                        <div className='w-full'>
                        <Image
                    src={place3}
                    alt="Picture of the author"
                    width={500}
                    height={500}
               />
                            <div className="w-full placesPrice">
                                <span>Cox s Bazar</span>
                                <span>1500tk</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Places;