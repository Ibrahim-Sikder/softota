import React from 'react';
import style from './Travel.module.css'
import Image from 'next/image';
import travel from '../../public/travell.png'
const Travel = () => {
    return (
        <div className={style.travel}>
           <Image
            src={travel}
            alt="Picture of the author"
            className={style.travelImg}
            />

        </div>
    );
};

export default Travel;