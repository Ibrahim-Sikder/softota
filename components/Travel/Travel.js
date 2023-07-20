import React from 'react';
import style from './Travel.module.css'
import Image from 'next/image';
import travel from '../../public/travell.png'
const Travel = () => {
    return (
        <div className={style.travel}>
           <div > 
           <Image
            src={travel}
            alt="Picture of the author"
            width={500}
            height={500}
            />
           </div>
        </div>
    );
};

export default Travel;