import React from "react";
import style from './TopBar.module.css'
import { FaPhoneAlt } from "react-icons/fa";
const TopBar = () => {
  return (
    <div className={style.topBar}>
      <div className=" ">
        <span>
          <FaPhoneAlt className={style.topBarIcon}></FaPhoneAlt>
          <span className={style.phone}>+01825-445033</span>
        </span>
        <span className={style.contact}>Contact us</span>
      </div>
    </div>
  );
};

export default TopBar;
