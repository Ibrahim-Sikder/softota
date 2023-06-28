import React from 'react';
import style from './Place.module.css'
import place from '../../public/see2.png'
import place2 from '../../public/see2.png'
import place3 from '../../public/see2.png'
import Image from 'next/image';
const Places = () => {
    return (
        <div className={style.places}>
           <h2 className=' grid place-items-center my-10'>Best Places To Visit In Bangladesh</h2>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                <Image
                    src={place}
                    alt="Picture of the author"
                    className={style.placeImg}
               />
                    <div className={style.placesPrice}>
                        <span>Cox s Bazar</span>
                        <span>1500tk</span>
                    </div>
                </div>
                <div className={style.leftContent}>
                    <p className='mb-8'>Bangladesh is a South Asian country with a rich cultural heritage <br /> and natural beauty. It is home to the world s largest mangrove <br /> forest, culture, and natural beauty.</p>
                    <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='w-full'>
                        <Image
                            src={place2}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                             />
                            <div className={style.placesPrice}>
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
                            <div className={style.placesPrice}>
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