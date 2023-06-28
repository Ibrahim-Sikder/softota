import React from "react";
import style from './TopBar.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import phone from '../../public/phone.png'
const TopBar = () => {
  return (
    <div className={style.topBar}>
     <div className={style.topbarWrap}>
     <span className={style.topBarLeft}>
        <Image
          className={style.topBarIcon}
          src={phone}
          alt="Picture of the author"
          width={40}
          height={20}                    
          /> 
          <span className={style.phone}>+01825-445033</span>
        </span>
        <span className={style.contact}>Contact us</span>
     </div>
    </div>
  );
};

export default TopBar;
